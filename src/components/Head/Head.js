import "../Head/stylingHead.css"
function Head({ produc }) {
    
    return <>

{/* <div className="card">
<h1>Quantity:{produc.quantity}</h1>
<p></p>
<button>Remove</button>
<button>Edit</button>
<img src={produc.product_image} />
</div> */}

<div className="card">
  <div className="card-header">
  {produc.product_name}
  </div>
  <div className="card-body">
    <img src={produc.product_image} alt="product"/>
    <h5 className="card-title">Quantity: {produc.quantity}</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <button className="btn btn-danger">Remove</button>
    <div className="rigtBox">
    <a href="#" className="btn btn-warning">Out Of Stock</a>
    </div>
  </div>
</div>
    </>
}

export default Head
