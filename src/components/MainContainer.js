import React, { useEffect, useState } from 'react'
import AllProducts from "./Products/AllProducts"
import NavBar from "./NavBar/NavBar"
import Form from "./Form/Form"

function Main() {
  const [product, setProduct] = useState([])
  const URL = "http://localhost:3000/products"

  useEffect(() => {
    let getrequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL, getrequestOptions)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [])

  function createNewProduct(data) {
    const quantity = parseInt(data.product_stock)
    const isInMarket = quantity > 0 ? true : false
    let submittedData = { ...data, isInMarket }
    const postrequestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData)
    }
    fetch(URL, postrequestOptions)
      .then(r => r.json())
      .then(j => setProduct([...product, j]))
  }

  function removefromStock(item) {
    const postrequestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }
    fetch(`${URL}/${item}`, postrequestOptions)
      .then(r => r.json())
      .then(j => {
        let newProductList = product.filter((x) => x.id !== item)
        setProduct(newProductList)
      })
  }
  function markasOutofStock(item) {
    let produtAvilability = item.isInMarket
    const postrequestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isInMarket: !produtAvilability })
    }
    fetch(`${URL}/${item.id}`, postrequestOptions)
      .then(r => r.json())
      .then(j => {
        let newarray=product.filter((e)=>e.id!==item.id)
       setProduct([...newarray,j]);
      })
  }
function updateOldProduct(item){
  const postrequestOptions = {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(item)
  }
  fetch(`${URL}/${item.id}`, postrequestOptions)
    .then(r => r.json())
    .then(j => {
      console.log(j)
      //let newarray=product.filter((e)=>e.id!==item.id)
     //setProduct([...newarray,j]);
    })
}
  return (
    <div className="app">
      <NavBar />
      <div className="row">
        <div className="col-8 ">
          <AllProducts 
          product={product} 
          removefromStock={removefromStock} 
          changeAvailability={markasOutofStock} 
          updateOldProduct={updateOldProduct}
          />
        </div>
        <div className="col-4 l-0">
          <Form createNewProduct={createNewProduct} />
        </div>
      </div>
    </div>
  )
}

export default Main