import './App.css'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
      
      <Navbar /> {/* Here we haven't passed any props so it will render the defaulProps. */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      {/* here variables title and aboutText are passed as props.  */}
    </>
  )
}

export default App
