import { useState } from "react";
import "../Product/popup.css"

function PopUp({trigger, product, togglePopup}) {
 const [updateData,setUpdateData]=useState({
    product_name: "",
    product_price: "",
    products_coo: "",
    product_master_category: "",
    product_image: "",
    product_stock: "" 
 })

 function handleChangeData(e) {
     console.log(e.target.value);
    e.preventDefault()
    let newData = { ...updateData, [e.target.name]: e.target.value }
    setUpdateData(newData);
}

    return (trigger) ? (
        <div className="popup-box" >
            <div className="popup-inner">
                <div className="formDiv div1">
                    <form >
                        <h4>Update Product</h4>
                        <div className="form-group row">
                            <label >Product Name<input name="product_name" className="form-control form-control-sm" value={product.product_name} placeholder="Name" onChange={handleChangeData} /></label>
                            <label >Price<input name="product_price" type="number" className="form-control form-control-sm" value={product.product_price} placeholder="Price" onChange={handleChangeData}/></label>
                            <label >Description<input name="products_coo" className="form-control form-control-sm" value={product.products_coo} placeholder="Description" onChange={handleChangeData}/></label>
                            <label >Category
                              <select className="form-select" name="product_master_category" value={product.product_master_category} aria-label="Default select example" onChange={handleChangeData} >
                                    <option value="331">Electronic</option>
                                    <option value="333">Toys</option>
                                    <option value="334">Computer Parts</option>
                                    <option value="332">Other</option>
                                </select>
                            </label>
                            <label>ImageURL<input name="product_image" className="form-control form-control-sm" value={product.product_image}placeholder="ImageURL" onChange={handleChangeData}/></label>
                            <label>Quantity<input name="product_stock" type="number" className="form-control form-control-sm" value={product.product_stock} onChange={handleChangeData}  placeholder="Quantity" /></label>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm">
                                    <button className=" btn btn-success" onClick={() => togglePopup()}>Update Product</button>
                                    </div>
                                    <div className="col-sm">
                                    <button className="btn btn-danger" type="submit">Cancel</button>
                                    </div>
                                    <div className="col-sm"> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) : "";
}

export default PopUp;