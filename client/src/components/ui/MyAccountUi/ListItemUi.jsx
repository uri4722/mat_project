import './css/passedAwayListUi.css'

import ListItem from '@mui/joy/ListItem';
import Avatar from '@mui/joy/Avatar';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';


import candle from '../../../assets/img/candle2.jpg'


function ListItemUi({ name, date, about, img, lonely, soldier, rabbi, age }) {
    return (

        <ListItem >
            <ListItemDecorator>
                <Avatar src={img ? img : candle} />
            </ListItemDecorator>
            <ListItemContent>
                <Typography level="title-sm">
                    {name}
                </Typography>
                <Typography level="body-sm">
                    {date}
                </Typography>
                <Typography level="body-sm">
                    {about}
                </Typography>

            <Divider orientation="horizontal" />
            </ListItemContent>
        </ListItem>

    )
}
export default ListItemUi;