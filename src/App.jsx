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
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white' //changes background of body to black
      showAlert('Light Mode has been enabled', 'success')
    }
  }//function to change mode.


  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
    <>

      {/* <Navbar /> */} {/*Here we haven't passed any props so it will render the defaultProps. */}
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} /> {/*pass the mode state and toggleMode function as prop with the variables of same name*/}
      {/* here variables title and aboutText are passed as props to Navbar component.  */}

      <Alert alert={alert} />

      <div className="container my-3"> {/* container is bootstrap class to keep the component in the middle and add equal margin at all sides 
      my-3: bootstrap class to add margin across y-axis*/}
        {/* Add Heading as a prop in the textform */}
        <TextForm heading="Enter your text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>


    </>
  )
}

export default App
