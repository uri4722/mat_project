import { HDate } from '@hebcal/core';
import gematriya from "gematriya";

function makeHeDates() {
    const yearOptions = [];
    const monthOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
    const dayOptions = [];

    for (let i = new HDate().getFullYear(); i > 0; i--) {
        yearOptions.push(gematriya(i));
    }
    for (let i = 1; i <= 30; i++) {
        dayOptions.push(gematriya(i));
    }

    return { yearOptions, monthOptions, dayOptions }

}
export default makeHeDates;