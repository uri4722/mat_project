import * as React from 'react';
import { useState } from 'react';

import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import PassedDisplayDitals from '../homeCompnent/PassedDisplayDitals';



export default function DividedList({ passedAwayArray }) {

    const [displayDitails, setDisplayDitails] = useState(false);

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                width: '100%',
                gap: 4,
            }}
        >

            <List
              size="lg"
                variant="outlined"
                sx={{
                    minWidth: 240,
                    borderRadius: 'sm',
                }}
            >
                {passedAwayArray.map(
                    (passedAway) => (
                        <div key={passedAway.name + passedAway.about}>
                            <ListItem>
                                <ListItemDecorator>
                                    <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                                </ListItemDecorator>
                                <ListItem> {passedAway.name}</ListItem>
                                <ListItem>{passedAway.name}</ListItem>
                                <ListItem>  {passedAway.date}</ListItem>

                                {<PassedDisplayDitals passedAway={passedAway} />}
                            </ListItem>
                            <ListDivider inset="default" />
                        </div>

                    ),
                )}</List>
        </Box>

    );
}