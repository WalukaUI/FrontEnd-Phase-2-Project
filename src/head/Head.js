import "../head/headcc.css"
function Head({ produc }) {
    console.log(produc);
    return <>

        <div class="card">
            <h1>Quantity:{produc.quantity}</h1>
            <p>{produc.product_name}</p>
            <button>Remove</button>
            <button>Edit</button>
            <img src={produc.product_image} />
        </div>
    </>
}

export default Head

