const HDate = require('@hebcal/core').HDate;
const HeDate = makeHeDates();


function tishreiToNissan(tishreiMonth) {
    return (tishreiMonth + 6) % 12;
}

function arrangeSqlDate(sqlDate) {

    const { day_death, month_death, year_death } = sqlDate;


    const date = new HDate(new HDate(day_death, month_death, year_death));
    sqlDate.date = date.renderGematriya();
    delete sqlDate.month_death;
    delete sqlDate.day_death;
}


function numToHeYear(num) {

    const unitLetters = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
    const tenLetters = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
    const hundredLetters = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];


    let heYear = "";
    if (num >= 1000) {
        heYear += heLetters(Math.floor(num / 1000), unitLetters);
        num %= 1000;
    }
    if (num >= 100) {
        heYear += heLetters(Math.floor(num / 100), hundredLetters);
        num %= 100;
    }
    if (num >= 10) {
        heYear += heLetters(Math.floor(num / 10), tenLetters);
        num %= 10;
    }
    heYear += heLetters(Math.floor(num), unitLetters);


    return formatHeYear(heYear);
}


function heLetters(num, letters) {
    return letters[num];
}

function formatHeYear(heYear) {
    if (heYear.length >= 2) {
        heYear = heYear.slice(0, heYear.length - 1) + '"' + heYear.slice(heYear.length - 1);
    } else if (heYear.length > 0) {
        heYear = "'" + heYear;
    }
    return heYear;
}


function makeHeDates() {
    const currentYear = new HDate().getFullYear();
    const yearOptions = [];
    const monthsOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
    const monthsLapYearOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
    const dayOptions = [];

    for (let i = currentYear; i > 0; i--) {
        yearOptions.push(numToHeYear(i));
    }

    for (let i = 1; i <= 30; i++) {
        dayOptions.push(numToHeYear(i));
    }

    return { yearOptions, monthsOptions, monthsLapYearOptions, dayOptions }

}

module.exports = { tishreiToNissan, arrangeSqlDate,HeDate };