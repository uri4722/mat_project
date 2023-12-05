import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem"
import { useState } from "react";

function PassedDisplayDitals({ passedAway }) {

    const [displayDitails, setDisplayDitails] = useState(false);


    return (<>

        {<button onClick={() => setDisplayDitails(!displayDitails)}>Show Details</button>}
        {displayDitails && <List
          
            sx={{
                minWidth: 240,
                borderRadius: 'sm',
            }}
        >
            <ListItem> <h3>{passedAway.about}</h3></ListItem>
            <ListItem><p>Age: {passedAway.age}</p></ListItem>
        </List>}

    </>
    )
}

export default PassedDisplayDitals