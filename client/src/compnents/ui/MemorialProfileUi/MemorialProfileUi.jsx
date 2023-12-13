import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import React from 'react';

import candle from '../../../assets/img/candle2.jpg'
import './css/MemorialProfileUi.css'


function MemorialProfileUi({ profile }) {
    const { name, date, about, img, lonely, soldier, rabbi, age, mishnaiot, storys } = profile
    const countMishnaiot = (sedriMishna) => {
        let count = { learn: 0, masechet: 0 };

        sedriMishna.forEach((seder) => {
            let isSederLearn = false;
            seder.forEach((masechet) => {
                if (masechet.learn) {
                    isSederLearn = true;
                    count.learn++
                }
                count.masechet = isSederLearn ? count.masechet + 1 : count.masechet;
            })
        })
        console.log(count);
        return count
    }

    return (
        <div className='continer'>
            <div className='card'>
                <div className='card-img'>
                    <img src={img ? img : candle} alt={`${name} img`} />
                </div>
                <div className='card-info'>
                    <div className='info'>
                        <h3>{name}</h3>
                    </div>
                    <div className='info'>
                        <h3>תאריך פטירה</h3>
                        <p>{date}</p>
                    </div>
                    <div className='info'>
                        <h3>גיל</h3>
                        <p>{age}</p>
                    </div>
                    <div className='info'>
                        <h3> בקצרה</h3>
                        <p>{about}</p>
                    </div>
                    <div className='status'>
                        נלמדו 
                        {mishnaiot && countMishnaiot(mishnaiot).learn}
                        מסכתות 
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


// return (
//     <Box
//         sx={{
//             width: '100%',
//             position: 'relative',
//             overflow: { xs: 'auto', sm: 'initial' },
//         }}>
//         <Card
//             orientation="horizontal"
//             sx={{
//                 width: '100%',
//                 flexWrap: 'wrap',
//                 // height: '35vh'

//             }}>
//             <AspectRatio flex ratio="1" maxHeight={300} sx={{ minWidth: 300 }}>
//                 <img
//                     src={img ? img : candle}
//                     srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
//                     loading="lazy"
//                     alt=""

//                 />
//             </AspectRatio>
//             <CardContent>
//                 <Typography fontSize="xl" fontWeight="lg">
//                     {name}
//                 </Typography>

//                 <Sheet
//                     sx={{
//                         bgcolor: 'background.level1',
//                         borderRadius: 'sm',
//                         p: 4,
//                         my: 2,
//                         display: 'flex',
//                         gap: 5,
//                     }}>
//                     <div >
//                         <Typography level="body-xs" fontWeight="lg">
//                             date
//                         </Typography>
//                         <Typography fontWeight="lg">{date}</Typography>
//                     </div>
//                     <div>
//                         <Typography level="body-xs" fontWeight="lg">
//                             Age
//                         </Typography>
//                         <Typography fontWeight="lg">{age}</Typography>
//                     </div>
//                     <div>
//                         <Typography level="body-xs" fontWeight="lg">
//                             about
//                         </Typography>
//                         <Typography fontWeight="lg">{about}</Typography>
//                     </div>
//                 </Sheet>
//                 <div className='storys'>
//                     <Typography fontSize="xl" fontWeight="lg">
//                         ממעשיו
//                     </Typography>
//                     {/* {storys && storys.map((story, index) => {
//                         return (
//                             <div className='story' key={index}>
//                                 <Typography level="body-xs" fontWeight="lg" style={{ marginBottom: '8px' }}>
//                                     <h2 style={{ fontSize: '24px' }}>{story.title}</h2>
//                                 </Typography>
//                                 <Typography level="body-xs" fontWeight="lg">
//                                     <p style={{ fontSize: '18px' }}>{story.content}</p>
//                                 </Typography>
//                             </div>
//                         )
//                     })} */}
//                 </div>
//                 {mishnaiot && mishnaiot.Zeraim.map((masechet, index) => {
//                     return (
//                         <div key={index}>
//                             <Typography level="body-xs" fontWeight="lg">
//                                 mashechet: {masechet.name}
//                             </Typography>
//                         </div>
//                     )
//                 })}
//             </CardContent>
//         </Card >
//     </Box >




// );
// }

export default MemorialProfileUi;