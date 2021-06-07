import "../Form/stylingCard.css"

function Form() {
    return (
        <form>
            <div className="form-group row">
                <label className="col-sm-2 ">Product Name</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
                <label  className="col-sm-2 ">Price</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
                <label className="col-sm-2 ">Description</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
                <label className="col-sm-2 ">Category</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
                <label className="col-sm-2 ">ImageURL</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
                <label className="col-sm-2 ">Quantity</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control form-control-sm"  placeholder="Name" />
                </div>
            </div>
            <button className="btn-primary">Create Product</button>
      </form>
    )
}

export default Form