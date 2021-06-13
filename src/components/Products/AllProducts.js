import { useState } from "react";
import "../Products/allProducts.css"
import Product from "./Product/Product"

function AllProducts({ product, removefromStock, changeAvailability, updateOldProduct, serachTerm, serachCatergory, viewChanger }) {
  const [productIndex, setproductIndex] = useState(0);

  //function productComponents(){
  //let filterItem=product.filter((e)=>e.product_name.toLowerCase().includes(serachTerm.toLowerCase()))
  // let slicer=filterItem.slice(productIndex, productIndex + 3)
  // let lastCard=slicer.map((e) =><Product 
  //   key={e.id} 
  //   product={e} 
  //   removefromStock={removefromStock} 
  //   changeAvailability={changeAvailability}
  //   updateOldProduct={updateOldProduct}
  //   />)

  //   return lastCard
  //}


  const productComponents = product !== null ? product
    .filter((e) => e.product_name.toLowerCase().includes(serachTerm.toLowerCase()))
    .filter((e) => (serachCatergory === "All" ? e : e.product_master_category.includes(serachCatergory)))
    .slice(productIndex, productIndex + (viewChanger ? 3 : 6))
    .map((e) => <Product
      key={e.id}
      product={e}
      removefromStock={removefromStock}
      changeAvailability={changeAvailability}
      updateOldProduct={updateOldProduct}
      viewChanger={viewChanger}
    />) : <div className="d-flex justify-content-center mt-5 mb-5">
    <div className="spinner-border text-danger" role="status">
      <span className="sr-only"></span>
    </div>
    <div className="row text-center" >
      <h3>Loading...</h3>
    </div>
  </div>


  function handleNextClickNext() {
    productIndex >= product.length - (viewChanger ? 3 : 6) ? alert("No more products") : setproductIndex((productIndx) => productIndx + 3)
  }
  function handleNextClickBack() {
    productIndex === 0 ? alert("No more Products, This is the First Page") : setproductIndex((productIndx) => productIndx - 3)
  }
  return (<><div className={!viewChanger ? "mainGrid" : null}>
    {productComponents}
  </div>

    <div className="row">
      <div className="col-12 text-center ">
        <button className="btn btn-outline-secondary baknextBtn" onClick={handleNextClickBack}>Back</button>
        <button className="btn btn-outline-secondary baknextBtn" onClick={handleNextClickNext}>Next</button>
      </div>
    </div>
  </>)
}

export default AllProducts