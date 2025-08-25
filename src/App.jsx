import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert'

function App() {
  const [mode, setMode] = useState('light') //use state to set the state as dark or light.

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black' //changes background of body to black
      showAlert('Dark Mode has been enabled', 'success')
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white' //changes background of body to black
      showAlert('Light Mode has been enabled', 'success')
      document.title = 'TextUtils - Light Mode'
    }
  }//function to change mode.

  const [navbarBg, setNavbarBg] = useState('')

  const backgroundBlue = () => {
    document.body.style.backgroundColor = '#65a2feff'
    setNavbarBg('#0d6efd')
  }
  
  const backgroundRed = () => {
    document.body.style.backgroundColor = '#fa717fff'
    setNavbarBg('#dc3545')
  }

  const backgroundYellow = () => {
    document.body.style.backgroundColor = '#ffc107'
    setNavbarBg('#ffc107')
  }

  const backgroundGreen = () => {
    document.body.style.backgroundColor = '#198754'
    setNavbarBg('#198754')
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>

      {/* <Navbar /> */} {/*Here we haven't passed any props so it will render the defaultProps. */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} backgroundBlue={backgroundBlue} backgroundYellow={backgroundYellow} backgroundGreen={backgroundGreen} backgroundRed={backgroundRed} navbarBg={navbarBg}/> {/*pass the mode state and toggleMode function as prop with the variables of same name*/}
      {/* here variables title and aboutText are passed as props to Navbar component.  */}

      <Alert alert={alert} />

      <div className="container my-3"> {/* container is bootstrap class to keep the component in the middle and add equal margin at all sides 
      my-3: bootstrap class to add margin across y-axis*/}
        {/* Add Heading as a prop in the textform */}
       <TextForm heading="Enter your text to analyze below" mode={mode} showAlert={showAlert}/>{/* pass the showAlert method in Textform*/}
        {/* <About/> */}
      </div>


    </>
  )
}

export default App
