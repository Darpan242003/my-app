import './App.css'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {


  return (
    <>
      
      {/* <Navbar /> */} {/*Here we haven't passed any props so it will render the defaultProps. */}
      <Navbar title="TextUtils" aboutText="About Us" />
      {/* here variables title and aboutText are passed as props to Navbar component.  */}


      <div className="container my-3"> {/* container is bootstrap class to keep the component in the middle and add equal margin at all sides 
      my-3: bootstrap class to add margin across y-axis*/}
        {/* Add Heading as a prop in the textform */}
        {/* <TextForm heading="Enter your text to analyze below"/> */}
        <About/>
      </div>

      
    </>
  )
}

export default App
