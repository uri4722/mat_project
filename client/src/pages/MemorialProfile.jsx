import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../components/navigtion/Header';
import MemorialProfileUi from '../components/ui/MemorialProfileUi/MemorialProfileUi';
import { createMemorialProfileApi, deleteStoryApi, getPassedAwayApi } from '../function/fetchFunction';

import { memorialProfileSchema } from '../JoiSchema/memorialProfileSchema';



function MemorialProfile() {
    const { id } = useParams();
    const { state } = useLocation();
    const manager = state?.manager;

    const [passedAway, setPassedAway] = useState();
    const [message, setMessage] = useState({ body: "", type: "" });


    useEffect(() => {
        // from the API 
        // including the mishniot and the stories
        getPassedAwayApi(id).then((data) => {
            setPassedAway(data);

        }).catch((error) => {
            console.log(error);
        })

    }, [state, id])

    const [user, setUser] = useState({ email: "", password: "", masechtot: [], story: { title: "", story: "", story_id: "" } });
    useEffect(() => {
        console.log(user);
    }, [user])


    const handleChangeMasechtot = (event) => {
        if (event.target.checked) {
            setUser({ ...user, masechtot: [...user.masechtot, event.target.name] })
        } else {
            setUser({ ...user, masechtot: user.masechtot.filter((masechet) => masechet !== event.target.name) })
        }
    }
    const handleChangeStores = ({ target }) => {
        setUser({ ...user, story: { ...user.story, [target.name]: target.value } })
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
        setUser({ ...user, [target.name]: target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = schema.validate(user);
        if (error) {
            setMessage({ body: error.details[0].message, type: "error" });
            return;
        }
        if (!error) {
            try {
                const ans = await createMemorialProfileApi(id, user);
                console.log(ans);
                setPassedAway({ ...passedAway, stores: [...passedAway.stores, ans.stores] });

                setPassedAway({ ...passedAway, mishnaiot: updateMishnioat(passedAway.mishnaiot, ans.masechtot) });
                setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
                setUser({ ...user, masechtot: [], story: { title: "", story: "" } });
            } catch (error) {
                console.log(error);
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



    const countMishnaiot = (sedriMishna) => {
        let count = { learn: 0, masechet: 0 };

        sedriMishna.forEach((seder) => {
            let isSederLearn = false;
            seder.forEach((masechet) => {
                if (masechet.alreadyTaken) {
                    isSederLearn = true;
                    count.learn++
                }
            })
            count.masechet = isSederLearn ? count.masechet + 1 : count.masechet;
        })
        return count
    }


    return (<>
        <Header />
        {passedAway && <div>
            <MemorialProfileUi
                profile={passedAway}
                countMishnaiot={countMishnaiot}
                user={user}
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