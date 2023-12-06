import SearchInput from "../muiCompnent/SearchInput";
import "./css/Filters.css"

function Filters({ passedAwayArray }) {
    return (
        <div className="FiltersContiner">
            <h1>Filters</h1>
            <SearchInput />
        </div>
    );
}
export default Filters;