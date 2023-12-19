
// import CircularProgress from '@mui/joy/CircularProgress';

import convertTishreiToNissan from '../../../function/convertTishreiToNissan';
import './css/selectHeDates.css';


function SelectHeDates({ handleChange, heDates }) {
    const { yearOptions, monthOptions, dayOptions } = heDates

    return (<>
        <div className='dateContiner'>

            <select name="year_death" onChange={handleChange}>
                {yearOptions.map((year, index) => {
                    return <option key={index} value={year}>{year}</option>
                })}
            </select>


            <select name="month_death" className='month_death' onChange={handleChange}>
                {monthOptions.map((month, index) => {
                    return <option key={index} value={convertTishreiToNissan(index) + 1}>{month}</option>
                })}
            </select>
            <select name="day_death" className='day_death' onChange={handleChange}>
                {dayOptions.map((day, index) => {
                    return <option key={index} value={index + 1}>{day}</option>
                })}
            </select>
        </div>

    </>)
}
export default SelectHeDates;