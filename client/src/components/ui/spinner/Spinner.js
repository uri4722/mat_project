import "./spinner.css";
import DotLoader from "react-spinners/DotLoader";

export function Spinner({ size, color }) {
    console.log(size, color);
    return (
        <div className="spinner">
            <DotLoader
                color={color ? color : "black"}
                size={size} />
        </div>
    );
}