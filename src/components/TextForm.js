import React, {useState} from 'react'
// import Alert from './Alert';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success")
        
    }
    const handleLowClick = ()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick = ()=>{
        let newText ='';
        setText(newText);
        props.showAlert("text Cleared","success")
    }
    const handleInverseClick = ()=>{
        let newText = text
        .split('')
        .map((char) => {
            // If the character is uppercase, make it lowercase and vice versa
                return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
            })
            .join('');
            setText(newText);
            props.showAlert("text Inverted","success")
        }
        const handleCopyTextClick =()=>{
            var text= document.getElementById("myBox");
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("text Copied","success")
        }
        const handleExtraSpaces =()=>{
            let newText= text.split(/[ ]+/)
            setText(newText.join(" "));
            props.showAlert("Extra space removed","success")
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
<div className="container"style={{color: props.mode==='dark'?'white':'#2f313d'}}>
        <h1>{props.heading}</h1>
      <div className="form-group">
    <textarea className="form-control"style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn-btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn-btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
  <button className="btn-btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
  <button className="btn-btn-primary mx-2" onClick={handleInverseClick}>Convert to Inverse Case</button>
  <button className="btn-btn-primary mx-2" onClick={handleCopyTextClick}>Copy Text</button>
  <button className="btn-btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
</div>
<div className="container my-3"style={{color: props.mode==='dark'?'white':'#2f313d'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").length} Words, {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length}  minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"enter something in the text box to preview it here !!!"}</p>
</div>
    </>
)
}
