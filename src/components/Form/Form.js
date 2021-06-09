import { useState } from "react"
import "../Form/stylingCard.css"

function Form({createNewProduct}) {
    const [details, setDetails] = useState({
        product_name: "",
        product_price: "",
        products_coo: "",
        product_master_category: "",
        product_image: "",
        product_stock: ""
    })

    function handleChange(e) {
        e.preventDefault()
        let newData = { ...details, [e.target.name]: e.target.value }
        setDetails(newData);
    }
    function submitNewProductData(e) {
        e.preventDefault()
        createNewProduct(details)
        setDetails({
            product_name: "",
            product_price: "",
            products_coo: "",
            product_master_category: "",
            product_image: "",
            product_stock: ""
        })
    }
    return (<div className="formDiv div1">
        <form onSubmit={(e)=>submitNewProductData(e)}>
            <h4>Add a New Product</h4>
            <div className="form-group row">
                <label >Product Name<input name="product_name" value={details.product_name} className="form-control form-control-sm" placeholder="Name" onChange={handleChange} /></label>
                <label >Price<input name="product_price" value={details.product_price} type="number" className="form-control form-control-sm" placeholder="Price" onChange={handleChange} /></label>
                <label >Description<input name="products_coo" value={details.products_coo} className="form-control form-control-sm" placeholder="Description" onChange={handleChange} /></label>
                <label >Category
                <select className="form-select" name="product_master_category" value={details.product_master_category} aria-label="Default select example" onChange={handleChange}>
                        <option value="331">Electronic</option>
                        <option value="333">Toys</option>
                        <option value="334">Computer Parts</option>
                        <option value="332">Other</option>
                    </select>
                </label>
                <label>ImageURL<input name="product_image" value={details.product_image} className="form-control form-control-sm" placeholder="ImageURL" onChange={handleChange} /></label>
                <label>Quantity<input name="product_stock" value={details.product_stock} type="number" className="form-control form-control-sm" placeholder="Quantity" onChange={handleChange} /></label>

                <button className="btn btn-primary btnForm" type="submit">Create Product</button>
            </div>
        </form>
    </div>

    )
}

export default Form