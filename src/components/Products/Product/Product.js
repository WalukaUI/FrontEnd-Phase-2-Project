import React, { useState } from 'react';
import PopUp from '../Product/PopUp';
import "./stylingHead.css"
import { Link } from "react-router-dom";
import NextbackMessages from "./Popup Messages"

function Product({ product, removefromStock, changeAvailability, updateOldProduct, viewChanger,setPopmessage,popmessage,message }) {
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
    <NextbackMessages
    message={message}
    setPopmessage={setPopmessage}
    popmessage={popmessage}
    />
  </> : <>
  <div className={product.isInMarket ? "card shadow gridmaindiv col-lg-3 text-center justify-content-center" : "card shadow gridmaindiv disable col-lg-3 text-center"} >
  <div className="innerDiv ">
      <Link to={`/products/${product.id}`}>
        <div className="card-header cardHead gridcardHead " >
          {product.product_name.substring(0,40)}
        </div>
      </Link>
      <div className="card-body">
      <div className="overflowGridImg">
        <img src={product.product_image} className="listimg card-image" alt="product" />
       </div>
        <h5 className="card-title">Availability: {product.product_stock}</h5>
        <p>Category: {categoryFilter()}</p>
        <h5>Price: ${product.product_price}</h5>
        <button className="btn btn-danger" onClick={removeItem}>Remove</button>
        <div className="gridbtns">
          {product.isInMarket ? <a href="#top" className="btn btn-warning gridWarningBtn"  onClick={changeAvailabilityofItem}>Mark as Out Of Stock</a> :
            <a className="btn btn-secondary" href="#top" onClick={togglePopup}>Re Stock</a>}
        </div>
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
    <NextbackMessages
    message={message}
    setPopmessage={setPopmessage}
    popmessage={popmessage}
    />
  </>

}

export default Product