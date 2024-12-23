import candle from '../../../assets/img/candle2.jpg'
import './css/ProfileCard.css'

import Divider from '@mui/joy/Divider';


function ProfileCard({ profile, countMishnaiot }) {
    const { name, date, about, img, age, mishnaiot, } = profile

    return <>< div className='grid-container' >
        <div className='grid-item1'>
            <div className='card-img'>
                <img src={img ? img : candle} alt={`${name} img`} />
            </div>
            <h2 className='name'>{name}</h2>
        </div>
        <div className='grid-item2'>
            <h3>תאריך פטירה</h3>
            <p>{date}</p>
        </div>
        <div className='grid-item2'>
            <h3>גיל</h3>
            <p>{age}</p>
        </div>
        <div className='grid-item2'>
            <h3> בקצרה</h3>
            <p>{about}</p>
        </div>

        <div className='grid-item3'>
            <h5> סך המסכתות שנלמדו </h5>
            <p>{mishnaiot && countMishnaiot && countMishnaiot.masechtot}</p>
        </div>
        <div className='grid-item3'>
            <h5> מתוך</h5>
            <p>{mishnaiot && countMishnaiot && countMishnaiot.sdarim}</p>
            <h5>סדרים</h5>
        </div>
        <div className='grid-item3'>
            <h5> סך הפרקים שנלמדו </h5>
            <p>{mishnaiot && countMishnaiot && countMishnaiot.numEps}</p>
        </div>
    </div>
        <Divider orientation="horizontal" sx={{ width: "80%" }} />
    </>
}

export default ProfileCard;