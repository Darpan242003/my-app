import React, { useState } from 'react'
// hooks : hooks let you use state and other react feature without writing a class OR in simple words hooks let us use the features of class without using a class


export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        // console.log('On change')
        setText(event.target.value) //this will set the text we type in textarea as a new value of text.
    }

    const handleUpClick = () => {
        // console.log('Uppercase was clicked' + text)

        let newText = text.toUpperCase() //method to convert text to uppercase
        setText(newText) //correct way to change value of text
        props.showAlert('Converted to Uppercase', 'success')
    }

    const handleLoClick = () => {
        // console.log('Uppercase was clicked' + text)

        let newText = text.toLowerCase() //method to convert text to lowercase
        setText(newText) //correct way to change value of text
        props.showAlert('Converted to Lowercase', 'success')
    }

    const handleClearClick = () => {
        // console.log('Uppercase was clicked' + text)

        let newText = "" //method to clear text 
        setText(newText) //correct way to change value of text
        props.showAlert('Text Cleared', 'success')
    }

    //function to extract urls
    const extractUrl = (text) => {
        const urlText = /(https?:\/\/[^\s]+)/g
        return text.match(urlText)
    }

    const [text, setText] = useState("")
    // text is a variable which will hold the default value "Enter Text Here"
    // setText is updating function of Text wherever it is present i.e. the text content will get updated through this function. all of this happens without reloading the page
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}/*style to change text color*/>
                <h1 className='mb-3'>{props.heading}</h1> {/* heading prop accepted in TextForm */}
                <div className="mb-3">
                    <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#353232' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}/*Javascript to style the text area by passing a style object in the form of ternary operator*/></textarea>
                    {/* we have used value={text} which displays "Enter Text Here" in textarea */}
                </div>
                <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0}className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0}className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                {/* onClick={handleUpClick} whenever we click on the button handleUpClick function will invoke. */}
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}/*style to change text color*/>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter(word => word.trim() !== "").length} words and {text.length} characters</p>
                {/* Or text.split(" ").filter((element)=>{return element.length() !== 0}) */}
                <p>{text.split(" ").filter(word => word.trim() !== "").length * 0.008} Minutes to read</p>
                <p>{extractUrl(text)?.length || 0} URL Found</p>
                {/* The ? before .length is called optional chaining in JavaScript.
It safely accesses the .length property only if extractUrl(text) is not null or undefined.

If extractUrl(text) returns an array, it gets the array's length.
If it returns null or undefined, it does not throw an error—instead, it returns undefined.
This prevents runtime errors when you try to access .length on a value that might be null or undefined.*/}
                {/* This above p-tag renders the number of urls extracted. */}
                <h3>Preview</h3>
                <p>{text.length>0 ? text: 'Nothing to preview !!'}</p>
            </div>
        </>
    )
}
