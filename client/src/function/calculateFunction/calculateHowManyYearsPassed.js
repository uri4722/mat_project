import Hebcal from "hebcal";
import{numberToWords} from 'number-to-words-hebrew'


export const calculateHowManyYearsPassed = (yearDeath) => {
    const heToday = new Hebcal.HDate();

    const courantYear = heToday.getFullYear();
    return courantYear - yearDeath;
}

export const numToYahrzeitStr = (num) => {
    const numToStr = {
        1: 'הראשון',
        2: 'השני',
        3: 'השלישי',
        4: 'הרביעי',
        5: 'החמישי',
        6: 'השישי',
        7: 'השביעי',
        8: 'השמיני',
        9: 'התשיעי',
        10: 'העשירי',

    }
    if (num <= 10) {
        return numToStr[num];
    }
    return "ה" + numberToWords(num);
}