import GridLoader from "react-spinners/GridLoader";
import "./spinner.css";

export function Spinner({ size, color }) {
    console.log(size, color);
    return (
        <div className="spinner">
            <GridLoader
                color={color ? color : "black"}
                size={size} />
        </div>
    );
}