import Hebcal from "hebcal";

export const calculateHowManyYearsPassed = (yearDeath) => {
    const heToday = new Hebcal.HDate();

    const courantYear = heToday.getFullYear();
    return courantYear - yearDeath;
}