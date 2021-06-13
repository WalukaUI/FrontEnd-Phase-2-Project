import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const URL = "http://localhost:3000/products"

function ProductDetail() {
    const [singleProduct, setsingleProduct] = useState(null);
    const params = useParams()
   
    useEffect(() => {
        fetch(`${URL}/${params.id}`)
            .then(r => r.json())
            .then(data => setsingleProduct(data))
    }, [params.id])
    
    if (!singleProduct) return <h2>Loading...</h2>
    
    
    return (<>
 <div className="card" >
  <img className="card-img-top" src={singleProduct.product_image} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </>
    );
}

export default ProductDetail;