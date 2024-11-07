import "./popup.css";

function Popup({children,setDisplay}) {
    const handleBackgroundClick = (e) => {
        if (e.target.className === 'popup-container') {
            setDisplay(false);
        }
    };
  return (
    <div className="popup-container" onClick={handleBackgroundClick}>
      <div className="popup-content">{children}</div>
    </div>
  );
}

export default Popup;
