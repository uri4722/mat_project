import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../compnents/navigtion/Header';
import MemorialProfileUi from '../compnents/ui/MemorialProfileUi/MemorialProfileUi';
import { getPassedAwayApi } from '../function/fetchFunction';


function MemorialProfile() {
    const { id } = useParams();
    const { state } = useLocation();

    const [passedAway, setPassedAway] = useState();


    useEffect(() => {
        // if the user came form navigate to this page
        // until the data is loaded from the API
        // Not including the mishniot and the stories
        if (state) {
            setPassedAway(state.passedAway);
        }

        // from the API 
        // including the mishniot and the stories
        getPassedAwayApi(id).then((data) => {
            setPassedAway(data);

        }).catch((error) => {
            console.log(error);
        })


    }, [state, id])

    const [user, setUser] = useState({ email: "", password: "", masechtot: [], storys: [] });


    const handleChangeMasechtot = (event) => {
        if (event.target.checked) {
            setUser({ ...user, masechtot: [...user.masechtot, event.target.name] })
        } else {
            setUser({ ...user, masechtot: user.masechtot.filter((masechet) => masechet !== event.target.name) })
        }
    }
    const handleChangeStorys = (event) => {
        

    }
    const handleChangeInput = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const handleSubmitMishnaiot = () => {
        console.log(user);

    }



    const countMishnaiot = (sedriMishna) => {
        let count = { learn: 0, masechet: 0 };

        sedriMishna.forEach((seder) => {
            let isSederLearn = false;
            seder.forEach((masechet) => {
                if (masechet.learn) {
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
                handleSubmit={handleSubmitMishnaiot}
                handleChangeStorys={handleChangeStorys}

            />
        </div>}

    </>
    );
}

export default MemorialProfile;