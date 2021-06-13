import "./navBar.css"
import { Link } from "react-router-dom"
import heading from "../NavBar/inventory manager.jpg"

function NavBar({ searchInDataBase, setSearchCatergory, setviewChanger }) {
  function activeSearch(e) {
    e.preventDefault()
    searchInDataBase(e.target.value)
  }
  function cardsByCategory(e) {
    e.preventDefault()
    setSearchCatergory(e.target.value)
  }
  return (
    <div className="row divBg">
      <div className="col-lg-6 col-md-8 col-sm-12">
        <nav className="navbar navbar-light bg-light navbarpadding divBg">
          <div >
            <a className="navbar-brand " href="/#">
              <img src="https://media.giphy.com/media/eM7h2gN2uvNVzzw1jA/giphy.gif" alt="logo" className="logo" />
              <img src={heading} alt="logo2" />
            </a>
          </div>
          <Link to="/"><button className="btn btn-success">Home</button></Link>
          <button onClick={() => setviewChanger(true)} className="btn btn-info">List View</button>
          <button onClick={() => setviewChanger(false)} className="btn btn-info gridbtn">Grid View</button>
        </nav>
      </div>

      <div className="col-lg-6 col-md-4 col-sm-9">
        <div className="row navrow2">
          <div className="col-lg-6   line1">
            <input className="form-control mr-sm-2 search" type="text" placeholder="Search by Name" onChange={activeSearch} />
          </div>
          <div className=" col-lg-6 line2 ">
            <label  >Display Category 
            <select className="form-select selector" aria-label="Default select example" onChange={cardsByCategory}>
              <option value="All">All</option>
              <option value="331">Electronic</option>
              <option value="333">Toys</option>
              <option value="334">Computer Parts</option>
              <option value="332">Other</option>
            </select></label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
