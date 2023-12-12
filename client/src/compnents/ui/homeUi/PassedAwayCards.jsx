
import Grid from '@mui/joy/Grid';
import './css/PassedAwayCards.css'
import UserCard from './UserCard';


function PassedAwayCards({ passedAwayArray }) {

    return (
        <div className="continerListPassed">
            <Grid container spacing={3} sx={{ flexGrow: 1 }}
                justifyContent="flex-start">
                {passedAwayArray.map(pass => {
                    return (
                        <div className="userCard" key={pass.name + pass.about}>
                            <Grid lg='auto' >
                                <UserCard passedAway={pass} />
                            </Grid>
                        </div>
                    )
                })}
            </Grid>
        </div>
    );
}

export default PassedAwayCards;