
import convertTishreiToNissan from '../../../function/convertTishreiToNissan';
import './css/selectHeDates.css';
// import { HDate } from '@hebcal/core';

import {HDate} from '@hebcal/hdate';


function SelectHeDates({ handleChange, heDates, yearSelected }) {
    
   const yearToNum = HDate.fromGematriyaString('א אלול ' + yearSelected.substring(1)).yy;
   const isLeapYear = HDate.isLeapYear(yearToNum);

    
    const { yearOptions, monthsOptions, dayOptions ,monthsLapYearOptions} = heDates
    const month = isLeapYear ? monthsLapYearOptions : monthsOptions;

    return (<>
        <div className='dateContiner'>


            <select name="year_death" onChange={handleChange}>
                {yearOptions.map((year, index) => {
                    return <option key={index} value={year}>{year}</option>
                })}

            </select>

            <select name="month_death" className='month_death' onChange={handleChange}>
                {month.map((month, index) => {
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