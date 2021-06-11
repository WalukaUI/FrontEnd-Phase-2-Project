import { useState } from "react";
import "../Products/allProducts.css"
import Product from "./Product/Product"

function AllProducts({ product, removefromStock, changeAvailability, updateOldProduct, serachTerm }) {
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


    const productComponents = product
    .filter((e)=>e.product_name.toLowerCase().includes(serachTerm.toLowerCase()))
    .slice(productIndex, productIndex + 3)
    .map((e) =><Product 
    key={e.id} 
    product={e} 
    removefromStock={removefromStock} 
    changeAvailability={changeAvailability}
    updateOldProduct={updateOldProduct}
    />)


  function handleNextClickNext() {
    productIndex===product.length-3?alert("No more products"):setproductIndex((productIndx) => productIndx + 3)
  }
  function handleNextClickBack() {
    productIndex===0?alert("No more Products, This is the First Page"):setproductIndex((productIndx) => productIndx - 3)
  }
  return (<>
    { productComponents}
    <div className="row">
      <div className="col-12 text-center ">
        <button className="btn btn-outline-secondary baknextBtn" onClick={handleNextClickBack}>Back</button>
        <button className="btn btn-outline-secondary baknextBtn"onClick={handleNextClickNext}>Next</button>
      </div>
    </div>
  </>)
}

export default AllProducts