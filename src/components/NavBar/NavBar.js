import "./navBar.css"

function NavBar() {
  return (

    <nav className="navbar navbar-light bg-light">
      <div>
        <a className="navbar-brand " href="#">
          <img src="https://media.giphy.com/media/eM7h2gN2uvNVzzw1jA/giphy.gif" alt="" width="30" height="24" className="d-inline-block align-text-top" />

        </a>
      </div>

      <div className="line1">
        <input className="form-control mr-sm-2 " type="text" placeholder="Search" />
      </div>
      <div>
        <select className="form-select" aria-label="Default select example">
          <option value="331">Electronic</option>
          <option value="333">Toys</option>
          <option value="334">Computer Parts</option>
          <option value="332">Other</option>
        </select>
      </div>
      <div className="line2">
        <button className="btn btn-success " type="submit">Search</button>
      </div>

    </nav>
  )
}

export default NavBar
