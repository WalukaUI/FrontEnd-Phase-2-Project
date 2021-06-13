import "./navBar.css"

function NavBar({searchInDataBase,setSearchCatergory,setviewChanger}) {
   function activeSearch(e){
     e.preventDefault()
     searchInDataBase(e.target.value)
   }
function cardsByCategory(e){
  e.preventDefault()
  setSearchCatergory(e.target.value)
}
  return (

    <nav className="navbar navbar-light bg-light">
      <div >
        <a className="navbar-brand " href="#">
          <img src="https://media.giphy.com/media/eM7h2gN2uvNVzzw1jA/giphy.gif" alt="" width="30" height="24" className="d-inline-block align-text-top" />

        </a>
      </div>
       <button onClick={()=>setviewChanger(true)}>List View</button>
       <button onClick={()=>setviewChanger(false)}>Grid View</button>
      <div className="line1">
        <input className="form-control mr-sm-2 " type="text" placeholder="Search" onChange={activeSearch}/>
      </div>
      <div className="line2">
        <p>Display Category </p>
        <select className="form-select" aria-label="Default select example" onChange={cardsByCategory}>
        <option value="All">All</option>
          <option value="331">Electronic</option>
          <option value="333">Toys</option>
          <option value="334">Computer Parts</option>
          <option value="332">Other</option>
        </select>
      </div>

    </nav>
  )
}

export default NavBar
