function numToHeYear(num) {
    console.log(num);
    let heYear = "";
    if (num >= 1000) {
        heYear += units(Math.floor(num / 1000));
        num %= 1000;
    }
    if (num >= 100) {
        heYear += hundreds(Math.floor(num / 100));
        num %= 100;
    }
    if (num >= 10) {
        heYear += tens(Math.floor(num / 10));
        num %= 10;
    }
    console.log(num);
    heYear += units(Math.floor(num));
    if (heYear.length >= 2) {
        heYear = heYear.slice(0, heYear.length - 1) + '"' + heYear.slice(heYear.length - 1);
    }
    else if (heYear.length > 0) {
        heYear = "'" + heYear;
    }


    return heYear;
}

function units(num) {
    const unitLetters = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
    return unitLetters[num];
}

function tens(num) {
    const tenLetters = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
    return tenLetters[num];
}

function hundreds(num) {
    const hundredLetters = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];
    return hundredLetters[num];

}

export default numToHeYear;