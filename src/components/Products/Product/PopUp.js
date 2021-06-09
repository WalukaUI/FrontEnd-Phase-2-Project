import "../Product/popup.css"

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup-box" >
            <div className="popup-inner">
                <button ></button>
            </div>
          <h1>popup awaaa</h1>
        </div>
    ) : "";
}

export default PopUp;