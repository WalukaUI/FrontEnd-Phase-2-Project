import React, { useEffect, useState } from 'react'
import Head from "./components/Head/Head"
import NavBar from "./components/NavBar/NavBar"


function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/products`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        //const slicer = json.slice(0, 100)
        setProduct(json)
      })
  }, [])
const all=product.map((e)=>{
  return <Head key={e.product_id} produc={e} />
})

return (<div className="app">
    <NavBar />
    {all}
  </div>
)
}

export default App;
