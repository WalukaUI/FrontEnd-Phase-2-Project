import React, { useState } from 'react';
import PopUp from '../Product/PopUp';
import "./stylingHead.css"
import { Link } from "react-router-dom";

function Product({ product, removefromStock, changeAvailability, updateOldProduct, viewChanger }) {
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null)

  function removeItem(e) {
    e.preventDefault()
    removefromStock(product.id)
  }
  function changeAvailabilityofItem(e) {
    e.preventDefault()
    changeAvailability(product)
  }
  function updateandClosePopup(item) {
    updateOldProduct(item)
    setIsOpen(!isOpen)
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
    setUpdateData(product)
  }
  function categoryFilter() {
    if (product.product_master_category === "331") {
      return "Electronic"
    } else if (product.product_master_category === "334") {
      return "Computer Parts"
    } else if (product.product_master_category === "333") {
      return "Toys"
    } else {
      return "Other"
    }
  }
  
  return viewChanger ? <>
    <div className={product.isInMarket ? "card shadow " : "card  disable"} >
      <Link to={`/products/${product.id}`}>
        <div className="card-header cardHead " >
          {product.product_name}
        </div>
      </Link>
      <div className="card-body">
        <img src={product.product_image} className="listimg list-card-image" alt="product" />
        <h5 className="card-title">Availability: {product.product_stock}</h5>
        <p>Category: {categoryFilter()}</p>
        <h5>Price: ${product.product_price}</h5>
        <button className="btn btn-danger" onClick={removeItem}>Remove</button>
        <div className="rigtBox">
          {product.isInMarket ? <a href="#top" className="btn btn-warning"  onClick={changeAvailabilityofItem}>Mark as Out Of Stock</a> :
            <a className="btn btn-secondary" href="#top" onClick={togglePopup}>Re Stock</a>}
        </div>
      </div>
    </div>

    <PopUp
      trigger={isOpen}
      togglePopup={togglePopup}
      updateData={updateData}
      setUpdateData={setUpdateData}
      updateandClosePopup={updateandClosePopup}
    />
  </> : <>
    <div className={product.isInMarket ? "card shadow gridView gridmaindiv" : "card gridView disable"}>
      <div className="overflowGridImg">
      <img src={product.product_image} className="card-image" alt="product" />
      </div>
      <div className="card-body">
        <Link to={`/products/${product.id}`}>
          <div className="card-header cardHead" >
            {product.product_name}
          </div>
        </Link>
        <h5 className="card-title">Availability: {product.product_stock}</h5>
        <p>Category: {categoryFilter()}</p>
        <h5>Price: ${product.product_price}</h5>

        <div className="right">
          <button className="btn btn-danger cardbutton"  onClick={removeItem}>Remove</button>
          {product.isInMarket ? <a className="btn btn-warning " href="#top" onClick={changeAvailabilityofItem}>Mark as Out Of Stock</a> :
            <a className="btn btn-secondary" href="#top" onClick={togglePopup}>Re Stock</a>}
        </div>
      </div>
    </div>
    <PopUp
      trigger={isOpen}
      togglePopup={togglePopup}
      updateData={updateData}
      setUpdateData={setUpdateData}
      updateandClosePopup={updateandClosePopup}
    />
  </>

}

export default Product