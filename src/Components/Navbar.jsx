import React from 'react'
import PropTypes from 'prop-types'

// to pass props in a component
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        {/* title variable as prop */}
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              {/* aboutText variable as prop */}
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

// Proptypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired, 
  aboutText: PropTypes.string.isRequired
}
//If we give title = {3} we will get an error because we have set proptype = string
//Proptype acts as a constraints

// Default Props
Navbar.defaultProps = {
  // default props will provide the below values when there will be no values passed.
  title : 'Set title here',
  aboutText : 'About Text Here'
}// in our project it will not work as we are using vite + React.


export default Navbar

