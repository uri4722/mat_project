import SearchInput from "./SearchInput";
import SelectIndicator from "./SelectIndicator";
import "./css/Filters.css"

function Filters({ passedAwayNames, handeleSearch, handeleSelect, handeleSort }) {

    return (
        <div className="FiltersContiner">
            <SelectIndicator
                handeleSelect={handeleSort}
                op={["א ב", "המבוגר ביותר", "הצעיר ביותר", "אקראי"]}
                opValues={["A-Z", "Oldest", "youngest", "Random"]}
                placeholder="מיין לפי"
            />
            <SelectIndicator
                handeleSelect={handeleSelect}
                op={["רבנים", "גלמודים", "חיילים", "יארצייט", "כולם"]}
                opValues={["rabbi", "lonely", "soldier", "Yahrzeit", ""]}
                placeholder="בחר סוג נפטר"
            />

            <SearchInput names={passedAwayNames} handeleSearch={handeleSearch} />
        </div>
    );
}
export default Filters;