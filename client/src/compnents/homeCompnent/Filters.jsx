import SearchInput from "../muiCompnent/SearchInput";
import "./css/Filters.css"

function Filters({ passedAwayNames, handeleSearch }) {

    return (
        <div className="FiltersContiner">
            <h1>Filters</h1>
            <SearchInput names={passedAwayNames} handeleSearch={handeleSearch} />
        </div>
    );
}
export default Filters;