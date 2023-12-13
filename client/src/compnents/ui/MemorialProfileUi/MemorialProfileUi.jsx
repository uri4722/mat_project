import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import React from 'react';

import candle from '../../../assets/img/candle.jpg'


function MemorialProfileUi({ profile }) {
    console.log(profile);
    const { name, date, about, img, lonely, soldier, rabbi, age, mishnaiot } = profile
    return (
        <Box
            sx={{
                width: '100%',
                position: 'relative',
                overflow: { xs: 'auto', sm: 'initial' },
            }}>
            <Card
                orientation="horizontal"
                sx={{
                    width: '100%',
                    flexWrap: 'wrap',
                    // height: '35vh'

                }}>
                <AspectRatio flex ratio="1" maxHeight={300} sx={{ minWidth: 300 }}>
                    <img
                        src={img ? img : candle}
                        srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
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
                        }}>
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
                        <div>
                            <Typography level="body-xs" fontWeight="lg">
                                about
                            </Typography>
                            <Typography fontWeight="lg">{about}</Typography>
                        </div>
                    </Sheet>
                        
                </CardContent>
            </Card >
        </Box >


        // >

        //     < Card
        //         orientation="horizontal"
        //         sx={{
        //             width: '100%',
        //             flexWrap: 'wrap',
        //         }}
        //     >
        //         <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
        //             <img
        //                 src={img ? img : candle}
        //                 srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
        //                 loading="lazy"
        //                 alt=""
        //             />
        //         </AspectRatio>
        //         <CardContent>
        //             <Typography fontSize="xl" fontWeight="lg">
        //                 {name}
        //             </Typography>

        //             <Sheet
        //                 sx={{
        //                     bgcolor: 'background.level1',
        //                     borderRadius: 'sm',
        //                     p: 4,
        //                     my: 2,
        //                     display: 'flex',
        //                     gap: 5,
        //                 }}
        //             >

        //                 <div >
        //                     <Typography level="body-xs" fontWeight="lg">
        //                         date
        //                     </Typography>
        //                     <Typography fontWeight="lg">{date}</Typography>
        //                 </div>
        //                 <div>
        //                     <Typography level="body-xs" fontWeight="lg">
        //                         Age
        //                     </Typography>
        //                     <Typography fontWeight="lg">{age}</Typography>
        //                 </div>
        //             </Sheet>

        //         </CardContent>
        //     </Card >
        // </ Box >

    );
}

export default MemorialProfileUi;