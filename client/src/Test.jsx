// import { HDate } from '@hebcal/core';

// function makeHeDates() {
//     const currentYear = new HDate().getFullYear();

//     const yearOptions = Array.from({ length: currentYear }, (_, i) => numToHeYear(1 + i));
//     const monthsOptions = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר", "ניסן", "אייר", "סיון", "תמוז", "אב", "אלול"];
//     const dayOptions = Array.from({ length: 30 }, (_, i) => numToHeYear(i + 1));

//     return { yearOptions, monthsOptions, dayOptions };
// }

// function numToHeYear(num) {
//     let heYear = '';
//     const unitLetters = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
//     const tenLetters = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
//     const hundredLetters = ['', 'ק', 'ר', 'ש', 'ת', 'תק', 'תר', 'תש', 'תת', 'תתק'];

//     if (num >= 1000) {
//         heYear += units(Math.floor(num / 1000), '');
//         num %= 1000;
//     }
//     if (num >= 100) {
//         heYear += units(Math.floor(num / 100), hundredLetters);
//         num %= 100;
//     }
//     if (num >= 10) {
//         heYear += units(Math.floor(num / 10), tenLetters);
//         num %= 10;
//     }
//     heYear += units(Math.floor(num), unitLetters);

//     return formatHeYear(heYear);
// }

// function units(num, letters) {
//     return letters[num];
// }

// function formatHeYear(heYear) {
//     if (heYear.length >= 2) {
//         heYear = heYear.slice(0, heYear.length - 1) + '"' + heYear.slice(heYear.length - 1);
//     } else if (heYear.length > 0) {
//         heYear = "'" + heYear;
//     }
//     return heYear;
// }

// // export default makeHeDates;





// function Test() {

//     const a = makeHeDates();
//     console.log(a);
//     return (
//         <div>
//             <h1>Test</h1>
//             {/* <h1>{a}</h1> */}
//         </div>
//     )
// }
// export default Test;