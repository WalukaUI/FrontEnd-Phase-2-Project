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
    
   function singleProductCard() {
       let all=singleProduct.map((e)=><div>
           <span key={e.product_name}>{e.product_name}</span>
                  <h1>{e.product_name}</h1>
                  <p>{e.product_name}</p>
            <div>{e.product_name}</div>
       </div>)
       return all
   }

    
    return (
        <section>
            {singleProductCard}
        </section>
    );
}

export default ProductDetail;