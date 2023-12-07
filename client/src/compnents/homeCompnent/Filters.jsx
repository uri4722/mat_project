import SearchInput from "../muiCompnent/SearchInput";
import SelectIndicator from "../muiCompnent/SelectIndicator";
import "./css/Filters.css"

function Filters({ passedAwayNames, handeleSearch, handeleSelect }) {

    return (
        <div className="FiltersContiner">
            <SelectIndicator handeleSelect={handeleSelect} />
            <SearchInput names={passedAwayNames} handeleSearch={handeleSearch} />
        </div>
    );
}
export default Filters;