// import { useState } from "react";
// import PassedDisplayDitals from "./PassedDisplayDitals";


import Grid from '@mui/joy/Grid';
import UserCard from '../muiCompnent/UserCard';
import './css/PassedAwayCards.css'


function PassedAwayCards({ passedAwayArray }) {

    return (
        <div className="continerListPassed">
            <Grid container spacing={3} sx={{ flexGrow: 1 }}
                justifyContent="flex-start">
                {passedAwayArray.map(pass => {
                    return (
                        <Grid key={pass.name + pass.about} lg='auto' >
                            <UserCard passedAway={pass} />
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default PassedAwayCards;