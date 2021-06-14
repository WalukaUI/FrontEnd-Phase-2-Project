import React, { useEffect, useState } from 'react'
import AllProducts from "./Products/AllProducts"
import NavBar from "./NavBar/NavBar"
import Form from "./Form/Form"
import { Switch, Route } from "react-router-dom";
import image from "../hand-painted-watercolor-background-with-sky-clouds-shape.jpg"
import ProductDetail from "./SingleProduct/SingleProduct"


function Main() {
  const [product, setProduct] = useState(null)
  const [serachTerm, setSearchtearm] = useState("")
  const [serachCatergory, setSearchCatergory] = useState("All")
  const [viewChanger, setviewChanger] = useState(true)

  //const URL="https://phase-ii-inventory-database.herokuapp.com/products"
  const URL = "http://localhost:3000/products"

  useEffect(() => {
    let getrequestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(URL, getrequestOptions)
      .then(res => res.json())
      .then(json => {
        let sorted = json.sort((a, b) => a.id - b.id)
        setProduct(sorted)
      })
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
      .then(j => {
        let beforeSort = ([...product, j])
        let sorted = beforeSort.sort((a, b) => a.id - b.id)
        setProduct(sorted)
      })
  }

  function removefromStock(item) {

    const postrequestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }

    if (product.length > 20) {
      fetch(`${URL}/${item}`, postrequestOptions)
        .then(r => r.json())
        .then(j => {
          let newProductList = product.filter((x) => x.id !== item)
          setProduct(newProductList)
        })
    } else {
      alert("Reached minimum limit of products, Cannot Delete")
    }
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
        let newarray = product.filter((e) => e.id !== item.id)
        let beforeSort = ([...newarray, j])
        let sorted = beforeSort.sort((a, b) => a.id - b.id)
        setProduct(sorted)
      })
  }
  function updateOldProduct(updates) {
    let quantity = parseInt(updates.product_stock)
    let isInMarket = quantity > 0 ? true : false
    let submittedData = { ...updates, isInMarket }
    const postrequestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(submittedData)
    }
    fetch(`${URL}/${updates.id}`, postrequestOptions)
      .then(r => r.json())
      .then(j => {
        let newarray = product.filter((e) => e.id !== updates.id)
        let beforeSort = ([...newarray, j])
        let sorted = beforeSort.sort((a, b) => a.id - b.id)
        setProduct(sorted)
      })
  }

  return (
    <main>
      <div className="app" style={{
        backgroundImage: `url(${image})`
      }}>
        <NavBar
          searchInDataBase={setSearchtearm}
          setSearchCatergory={setSearchCatergory}
          setviewChanger={setviewChanger}
        />
        <div className="cont">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Switch>
                <Route path="/products/:id">
                  <ProductDetail />
                </Route>
                <Route path="/">
                  <AllProducts
                    product={product}
                    removefromStock={removefromStock}
                    changeAvailability={markasOutofStock}
                    updateOldProduct={updateOldProduct}
                    serachTerm={serachTerm}
                    serachCatergory={serachCatergory}
                    viewChanger={viewChanger}
                  />
                </Route>
              </Switch>

            </div>
            <div className="col-lg-4 col-md-12">
              <Form createNewProduct={createNewProduct} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main