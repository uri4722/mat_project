import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../compnents/navigtion/Header';
import MemorialProfileUi from '../compnents/ui/MemorialProfileUi/MemorialProfileUi';
import {  getPassedAwayApi } from '../function/fetchFunction';


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

   
    return (<>
        <Header />
        {passedAway && <div>
            <MemorialProfileUi profile={passedAway} />
        </div>}

    </>
    );
}

export default MemorialProfile;