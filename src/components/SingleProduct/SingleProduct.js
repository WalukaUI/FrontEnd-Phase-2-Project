import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import "./singleProduct.css"

const URL="https://phase-ii-inventory-database.herokuapp.com/products"

function ProductDetail() {
  const [singleProduct, setsingleProduct] = useState(null);
  const params = useParams()

  useEffect(() => {
    fetch(`${URL}/${params.id}`)
      .then(r => r.json())
      .then(data => setsingleProduct(data))
  }, [params.id])

  if (!singleProduct) return <div className="d-flex justify-content-center mt-5 mb-5">
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only"></span>
    </div>
    <div className="row text-center" >
      <h3>Loading...</h3>
    </div>
  </div>

  function categoryFilter() {
    if (singleProduct.product_master_category === "331") {
      return "Electronic"
    } else if (singleProduct.product_master_category === "334") {
      return "Computer Parts"
    } else if (singleProduct.product_master_category === "333") {
      return "Toys"
    } else {
      return "Other"
    }
  }
  

  return (<>
    <div className="card singleCard" >
      <img className="card-img-top" src={singleProduct.product_image} alt="Cardimagecap" />
      <div className="card-body">
        <h5 className="card-title">{singleProduct.product_name}</h5>
        <h3>Price: ${singleProduct.product_price}</h3>
        <p>Category: {categoryFilter()}</p>
        <p>Availability: {singleProduct.product_stock}</p>
        <p>Shipping Weight: {singleProduct.product_shipping_weight ? singleProduct.product_shipping_weight : "Not Available"}Kg</p>
        <p>Product MPN: {singleProduct.product_mpn ? singleProduct.product_mpn : "Not Available"}</p>
        <a href={singleProduct.product_url} target="blank">Click here to See more about this Product...</a>


      </div>
    </div>
  </>
  );
}

export default ProductDetail;