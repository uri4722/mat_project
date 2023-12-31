import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';

import candle from '../../../assets/img/candle2.jpg'

export default function UserCard({ passedAway }) {
    const { name, date, about, img, lonely, soldier, rabbi, age } = passedAway
    return (
        <Box
            sx={{
                width: '94%',
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
            }}

        >
            < Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    height: '180px',
                }}
            >
                <AspectRatio flex ratio="1" maxHeight={160} sx={{ minWidth: 160 }}>
                    <img
                        src={img ? img : candle}
                        srcSet={img ? img : candle}
                        loading="lazy"
                        alt=""
                    />
                </AspectRatio>
                <CardContent>
                    <Typography fontSize="xl" fontWeight="lg">
                        {name}
                    </Typography>

                    <Sheet
                        sx={{
                            bgcolor: 'background.level1',
                            borderRadius: 'sm',
                            p: 4,
                            my: 2,
                            display: 'flex',
                            gap: 5,
                        }}
                    >

                        <div >
                            <Typography level="body-xs" fontWeight="lg">
                                date
                            </Typography>
                            <Typography fontWeight="lg">{date}</Typography>
                        </div>
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                Age
                            </Typography>
                            <Typography fontWeight="lg">{age}</Typography>
                        </div>
                    </Sheet>
            
                </CardContent>
            </Card >
        </Box >

    );
}
