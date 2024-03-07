import GridLoader from "react-spinners/GridLoader";
import "./spinner.css";

export function Spinner(size, color) {
    return (
        <div className="spinner">
            <GridLoader
                color="#000000"
                size={45} />
        </div>
    );
}