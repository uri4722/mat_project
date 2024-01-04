import List from "@mui/joy/List";
import ListItemUi from "./ListItemUi";
import { NavLink } from "react-router-dom";

function PassedAwayListUi({ passedAwayArray }) {
    return (
        <List
            aria-labelledby="ellipsis-list-demo"
            sx={{ '--ListItemDecorator-size': '56px' }}>
            {passedAwayArray.map((passedAway, index) =>
                < NavLink
                    to={`/memorialProfile/${passedAway.passed_away_id}`}
                    state={{ manager: true }}
                >
                    <ListItemUi key={index} {...passedAway} />
                </NavLink>
            )}

        </List>

    )

}
export default PassedAwayListUi;