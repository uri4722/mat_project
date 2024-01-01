import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../compnents/navigtion/Header';
import MemorialProfileUi from '../compnents/ui/MemorialProfileUi/MemorialProfileUi';
import { createMemorialProfileApi, getPassedAwayApi } from '../function/fetchFunction';

import Joi from 'joi';



function MemorialProfile() {
    const { id } = useParams();
    const { state } = useLocation();

    const [passedAway, setPassedAway] = useState();
    const [message, setMessage] = useState({ body: "", type: "" });


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

    const [user, setUser] = useState({ email: "", password: "", masechtot: [], story: { title: "", story: "" } });


    const handleChangeMasechtot = (event) => {
        if (event.target.checked) {
            setUser({ ...user, masechtot: [...user.masechtot, event.target.name] })
        } else {
            setUser({ ...user, masechtot: user.masechtot.filter((masechet) => masechet !== event.target.name) })
        }
    }
    const handleChangeStorys = ({ target }) => {
        setUser({ ...user, story: { ...user.story, [target.name]: target.value } })
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
            const ans = await createMemorialProfileApi(id, user);
            // dont work need to fix
            // i dont know why
            // console.log({ ...passedAway, storys: [...passedAway.storys, ans.story] });
            setPassedAway( { ...passedAway, storys: [...passedAway.storys, ans.story] });
            
            // if (ans.story.story) {
            //     passedAway.storys.push(ans.story);
            // }
            setPassedAway({ ...passedAway, mishnaiot: updateMishnioat(passedAway.mishnaiot, ans.masechtot) });
            setMessage({ body: "ההרשמה בוצעה בהצלחה", type: "success" });
            setUser({ ...user, masechtot: [], story: { title: "", story: "" } });
        }
    }

    const schema = Joi.object({
        email: Joi.string()
            .email({ tlds: { allow: false } })
            .message("כתובת מייל לא תקינה")
            .required()
            .messages({ 'string.empty': ' צריך למלאות אימייל' }),
        password: Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .required()
            .messages({ 'string.empty': ' צריך למלאות סיסמא' }),
        masechtot: Joi.array(),
        story: Joi.object()
    })

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
                handleSubmit={handleSubmit}
                handleChangeStorys={handleChangeStorys}
                message={message}
            />
        </div>}

    </>
    );
}

export default MemorialProfile;