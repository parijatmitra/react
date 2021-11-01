import React, {useState} from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClearClick = ()=> {
        let newText = "";
        setText(newText);
    }
    
    return (
        <>
        <div className="container">

            <h1>{props.heading}</h1>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
            </div>
            
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        
        <div className="container my-3" >
             <h2>Your text summary</h2>
             <p>{text.split(" ").length} words, {text.length}charecters</p>
             <p>{0.008 * text.split(" ").length} Minutes read</p>
             <h2>Preview</h2>
             <p>{text}</p>
        </div>







        </>
    )
}
