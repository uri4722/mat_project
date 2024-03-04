import { HDate } from '@hebcal/core';
import numToHeYear from './numToHeYear';

function makeHeDates() {
    const currentYear = new HDate().getFullYear();
    const yearOptions = [];
    const monthOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
    const monthsLapYearOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
    const dayOptions = [];

    for (let i = currentYear; i > 0; i--) {
        yearOptions.push(numToHeYear(i));
    }

    for (let i = 1; i <= 30; i++) {
        dayOptions.push(numToHeYear(i));
    }

    return { yearOptions, monthOptions, monthsLapYearOptions, dayOptions }

}
export default makeHeDates;