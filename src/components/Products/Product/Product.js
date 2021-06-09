import React, { useState } from 'react';
import PopUp from '../Product/PopUp';

import "./stylingHead.css"
function Product({ product, removefromStock, changeAvailability }) {
  const [isOpen, setIsOpen] = useState(false);

  function removeItem(e) {
    e.preventDefault()
    removefromStock(product.id)
  }
  function changeAvailabilityofItem(e) {
    e.preventDefault()
    changeAvailability(product)
  }
  const togglePopup = () => {
    setIsOpen(!isOpen);
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
  return <>
    <div className={product.isInMarket ? "card" : "card disable"} >
      <div className="card-header">
        {product.product_name}
      </div>
      <div className="card-body">
        <img src={product.product_image} alt="product" />
        <h5 className="card-title">Availability: {product.product_stock}</h5>
        <p>Category: {categoryFilter()}</p>
        <a className="card-text" target="blank" href={product.product_url}>See more Details.... </a>
        <button className="btn btn-danger" onClick={removeItem}>Remove</button>
        <div className="rigtBox">
          {product.isInMarket ? <a href="#" className="btn btn-warning" onClick={changeAvailabilityofItem}>Mark as Out Of Stock</a> : 
          <a className="btn btn-secondary" onClick={togglePopup}>Re Stock</a>}
        </div>
      </div>
      </div>

   <PopUp trigger={isOpen}>

   </PopUp>

    
  </>
}

export default Product