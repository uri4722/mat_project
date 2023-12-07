import { useNavigate } from "react-router-dom";

function Nav({ textContent }) {
    const navigate = useNavigate();
    const handleClick = ({ target }) => {
        const { textContent } = target
        console.log(textContent);
        navigate("/" + textContent)
    
    }


    return <button className="NavBtn" onClick={handleClick}>{textContent}</button>



}
export default Nav