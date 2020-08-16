import React from 'react'
function NavBar() {
    return(
        <navbar className="navbar navbar-dark bg-dark">
        <a className="navbar-brand">Greetings from Houdhayfa</a>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </navbar>
    )
}
export default NavBar