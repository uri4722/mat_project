import List from "@mui/joy/List";
import ListItemUi from "./ListItemUi";

function PassedAwayListUi({ passedAwayArray }) {
    return (
        <List
            aria-labelledby="ellipsis-list-demo"
            sx={{ '--ListItemDecorator-size': '56px' }}>
            {passedAwayArray.map((passedAway, index) =>
                <ListItemUi key={index} {...passedAway} />
            )}

        </List>

    )

}
export default PassedAwayListUi;