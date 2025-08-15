import React, { useState } from 'react'
// hooks : hooks let you use state and other react feature without writing a class OR in simple words hooks let us use the features of class without using a class


export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Uppercase was clicked' + text)
        
        let newText = text.toUpperCase() //method to convert text to uppercase

        setText(newText) // correct way to change value of text
    }

    const handleOnChange = (event) => {
        console.log('On change')
        setText(event.target.value) //this will set the text we type in textarea as a new value of text.
    }

    const [text, setText] = useState("Enter Text Here")
    // text is a variable which will hold the default value "Enter Text Here"
    // setText is updating function of Text wherever it is present i.e. the text content will get updated through this function. all of this happens without reloading the page
    return (
        <div>
            <h1>{props.heading}</h1> {/* heading prop accepted in TextForm */}
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
                {/* we have used value={text} which displays "Enter Text Here" in textarea */}
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            {/* onClick={handleUpClick} whenever we click on the button handleUpClick function will invoke. */}
        </div>
    )
}
