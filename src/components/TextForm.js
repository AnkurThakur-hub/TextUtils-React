import React, {useState} from 'react'
export default function TextForm(props) {
const handleUpClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}
const handleLoClick=()=>{
    // console.log("Uppercase was clicked");
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
}
const handleClearClick=()=>{
    // console.log("Uppercase was clicked");
    let newText='';
    setText(newText);
     props.showAlert("Text Cleared!", "success");
}
const handleOnChange=(event)=>{
    console.log("On change");
    setText(event.target.value);
}

const [text, setText]= useState('');
// setText("new text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" class='form-label'>Example Textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows='8'></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
         <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lowercase</button>
         <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
       </div>
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>You Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.08 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
       </div>
       </>
  )
}
