import makeHeDates from "./makeHeDates";

function getHeDates() {
    let heDates = localStorage.getItem("heDates");
    if (heDates) {
        heDates = JSON.parse(heDates);
    } else {
        console.log("getHeDates - makeHeDates");
        heDates = makeHeDates();
        localStorage.setItem("heDates", JSON.stringify(heDates));
    }
    return heDates;
}
export default getHeDates;