import "../Product/popup.css"

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup-box" >
            <div className="popup-inner">
                <button className=" btn btn-primary" onClick={()=>props.togglePopup()}>Update Product</button>
            </div>
          <h1>popup awaaa</h1>
        </div>
    ) : "";
}

export default PopUp;