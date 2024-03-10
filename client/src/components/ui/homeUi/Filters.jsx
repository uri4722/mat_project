import SearchInput from "./SearchInput";
import SelectIndicator from "./SelectIndicator";
import "./css/Filters.css"

function Filters({ passedAwayNames, handleSearch, handleSelectType, handleSort }) {
    console.log("sort = ", handleSort, "selectType = ", handleSelectType, "search = ", handleSearch);

    return (
        <div className="FiltersContiner">
            <SelectIndicator
                handleSelect={handleSort}
                op={["א ב", "המבוגר ביותר", "הצעיר ביותר", "אקראי"]}
                opValues={["A-Z", "Oldest", "youngest", "Random"]}
                placeholder="מיין לפי"
            />
            <SelectIndicator
                handleSelect={handleSelectType}
                op={["רבנים", "גלמודים", "חיילים", "יארצייט", "כולם"]}
                opValues={["rabbi", "lonely", "soldier", "Yahrzeit", ""]}
                placeholder="בחר סוג נפטר"
            />

            <SearchInput names={passedAwayNames} handleSearch={handleSearch} />
        </div>
    );
}
export default Filters;