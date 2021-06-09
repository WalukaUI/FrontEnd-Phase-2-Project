import "../Product/popup.css"

function PopUp(props) {
    return (props.trigger) ? (
        <div className="popup-box" >
            <div className="popup-inner">
                <button className=" btn btn-primary" onClick={()=>props.togglePopup()}>Update Product</button>
                <div className="formDiv div1">
        <form >
            <h4>Add a New Product</h4>
            <div className="form-group row">
                <label >Product Name<input name="product_name"  className="form-control form-control-sm" placeholder="Name"  /></label>
                <label >Price<input name="product_price"  type="number" className="form-control form-control-sm" placeholder="Price"  /></label>
                <label >Description<input name="products_coo"  className="form-control form-control-sm" placeholder="Description"  /></label>
                <label >Category
                <select className="form-select" name="product_master_category"  aria-label="Default select example" >
                        <option value="331">Electronic</option>
                        <option value="333">Toys</option>
                        <option value="334">Computer Parts</option>
                        <option value="332">Other</option>
                    </select>
                </label>
                <label>ImageURL<input name="product_image"  className="form-control form-control-sm" placeholder="ImageURL"  /></label>
                <label>Quantity<input name="product_stock"  type="number" className="form-control form-control-sm" placeholder="Quantity"  /></label>

                <button className="btn btn-primary btnForm" type="submit">Create Product</button>
            </div>
        </form>
    </div>
            </div>
        </div>
    ) : "";
}

export default PopUp;