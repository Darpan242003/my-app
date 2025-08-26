import React from 'react'
import PropTypes from 'prop-types'

//Here props are accepted in our Navbar component
const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.navbarBg}`}>{/*change the navbar-light and bg-light properties with props to change light/dark using javascript template literals.*/}
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
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <button onClick={props.backgroundRed} style={{height: '30px', width: '30px', borderRadius: '50%', backgroundColor: 'red', border: 'none', margin: '10px'}}></button>
          <button onClick={props.backgroundBlue} style={{height: '30px', width: '30px', borderRadius: '50%', backgroundColor: 'blue', border: 'none', margin: '10px'}}></button>
          <button onClick={props.backgroundYellow} style={{height: '30px', width: '30px', borderRadius: '50%', backgroundColor: 'yellow', border: 'none', margin: '10px'}}></button>
          <button onClick={props.backgroundGreen} style={{height: '30px', width: '30px', borderRadius: '50%', backgroundColor: 'green', border: 'none', margin: '10px'}}></button>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}> {/* change the text-dark property with the JS condition */}
            <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode} /> {/* when clicked mode will change due to toggleMode */}
            <label className="form-check-label" htmlFor="switchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Proptypes: informs the type of a prop.
Navbar.propTypes = {
  title: PropTypes.string.isRequired, //when we use isRequired it will throw the error if we don't provide the value for title or AboutText.
  aboutText: PropTypes.string.isRequired
}
//If we give title = {3} we will get an error because we have set proptype = string
//Proptype acts as a constraints

// Default Props
Navbar.defaultProps = {
  // default props will provide the below values when there will be no values passed.
  title: 'Set title here',
  aboutText: 'About Text Here'
}// in our project it will not work as we are using vite + React.


export default Navbar
