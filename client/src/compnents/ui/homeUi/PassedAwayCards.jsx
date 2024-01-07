
import Grid from '@mui/joy/Grid';
import './css/PassedAwayCards.css'
import UserCard from './UserCard';
import { NavLink } from 'react-router-dom';


function PassedAwayCards({ passedAwayArray }) {




    return (
        <div className="continerListPassed">
            <Grid container spacing={3} sx={{ flexGrow: 1 }}
                justifyContent="flex-start">
                {passedAwayArray.map(pass => {
                    return (
                        <div className="userCard" key={pass.name + pass.about}>
                            <Grid lg='auto' >
                                < NavLink to={`/memorialProfile/${pass.passed_away_id}`} state={{ passedAway: pass }} >
                                    <UserCard passedAway={pass} />
                                </NavLink>
                            </Grid>
                        </div>
                    )
                })}
            </Grid >
        </div >
    );
}

export default PassedAwayCards;