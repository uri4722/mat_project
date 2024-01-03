function numToHeYear(num) {
    // console.log("numToHeYear");

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

export default numToHeYear;