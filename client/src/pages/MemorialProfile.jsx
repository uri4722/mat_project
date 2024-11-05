import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import MemorialProfileUi from '../components/ui/MemorialProfileUi/MemorialProfileUi';
import { createMemorialProfileApi, deleteStoryApi, fetchLogin, getPassedAwayApi } from '../function/fetchFunction';

import { memorialProfileSchema } from '../JoiSchema/memorialProfileSchema';
import isUser from '../function/isUser';
import getUser from '../function/getUser';
import HeaderNav from '../components/navigtion/HeaderNav';
import { useFetchApiGet } from '../function/useFetchApiGet';



function MemorialProfile() {
    const { id } = useParams();
    const { state } = useLocation();
    const manager = state?.manager;
    const [isUserConnected, setIsUserConnected] = useState(isUser("user"));

    const [passedAway, setPassedAway] = useState();
    const [statistics, setStatistics] = useState();
    const [message, setMessage] = useState({ body: "", type: "" });
    const [takeCommitmentInput, setTakeCommitmentInput] = useState({
        email: "",
        password: "",
        masechtot: [],
        story: {
            title: "",
            story: "",
            story_id: ""
        }
    });

    const [mishnaiot_calc, isLoading, error] = useFetchApiGet(`passedAway/${id}/mishnaiot_calc`);

    const getPassedAway = async (id) => {
        try {
            const data = await getPassedAwayApi(id);
            setPassedAway(data);
        } catch (error) {
            console.log(error);
        }
    };
 
    useEffect(() => {
        if (isUserConnected) {
            const user = getUser("user");
            setTakeCommitmentInput({ ...takeCommitmentInput, email: user.email, password: user.password });
        }
    }, [isUserConnected])

    useEffect(() => {
        if (mishnaiot_calc) {
            console.log(mishnaiot_calc);
            
            setStatistics(mishnaiot_calc);
        }
    }, [mishnaiot_calc])


    useEffect(() => {
        // get passed away from the API 
        // including the mishniot and the stories
        getPassedAway(id);
    }, [state, id])




    const handleChangeMasechtot = (event) => {
        if (event.target.checked) {
            setTakeCommitmentInput({ ...takeCommitmentInput, masechtot: [...takeCommitmentInput.masechtot, event.target.name] })
        } else {
            setTakeCommitmentInput({ ...takeCommitmentInput, masechtot: takeCommitmentInput.masechtot.filter((masechet) => masechet !== event.target.name) })
        }
    }
    const handleChangeStores = ({ target }) => {
        setTakeCommitmentInput({ ...takeCommitmentInput, story: { ...takeCommitmentInput.story, [target.name]: target.value } })
    }
    const handleDeleteStores = async (storyId) => {
        try {
            await deleteStoryApi(storyId);
            const newStores = passedAway.stores.filter((story) => story.story_id !== storyId);
            setPassedAway({ ...passedAway, stores: newStores });
            setMessage({ body: "הסיפור נמחק בהצלחה", type: "success" });
        } catch (error) {
            console.log(error);
        }
    }
    const handleChangeInput = ({ target }) => {
        setTakeCommitmentInput({ ...takeCommitmentInput, [target.name]: target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isUserConnected) {
        const { error } = schema.validate(takeCommitmentInput);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        try {
            const user = await fetchLogin({ email: takeCommitmentInput.email, password: takeCommitmentInput.password });
            sessionStorage.setItem("user", JSON.stringify(user));
            setIsUserConnected(true);
        } catch (error) {
                console.log(error);
                setMessage({ body: error.message, type: "error" });

            }
            return;
        }else{
            try {
                const ans = await createMemorialProfileApi(id, takeCommitmentInput);
                console.log(ans);
                setPassedAway({ ...passedAway, stores: [...passedAway.stores, ans.stores] });
                        setPassedAway({ ...passedAway, mishnaiot: updateMishnioat(passedAway.mishnaiot, ans.masechtot) });
                        setMessage({ body: " תודה רבה ", type: "success" });
                        setTimeout(() => {
                            setTakeCommitmentInput({ ...takeCommitmentInput, masechtot: [], story: { title: "", story: "" } });
                        }, 2000)
                    } catch (error) {
                        console.log(error.message);
                        setMessage({ body: "הפעולה נכשלה אנא נסה שנית", type: "error" });
        
                    }
                }
    }

    const schema = memorialProfileSchema;

    const updateMishnioat = (masechtot, masechtotChange) => {
        const newMisnaiot = [...masechtot];
        newMisnaiot.forEach((seder, i) => {
            seder.forEach((masechet, index) => {
                if (masechtotChange.includes(masechet.name)) {
                    newMisnaiot[i][index].alreadyTaken = true;
                }
            })
        })
        return newMisnaiot;
    }



    return (<>
        < HeaderNav />
        {passedAway && <div>
            <MemorialProfileUi
                profile={passedAway}
                countMishnaiot={statistics}
                user={takeCommitmentInput}
                isUserConnected={isUserConnected}
                handleChangeMasechtot={handleChangeMasechtot}
                handleChangeInput={handleChangeInput}
                handleSubmit={handleSubmit}
                handleChangeStores={handleChangeStores}
                message={message}
                manager={manager}
                handleDeleteStores={handleDeleteStores}
            />
        </div>}

    </>
    );
}

export default MemorialProfile;