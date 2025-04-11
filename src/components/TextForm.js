import React,{useState} from 'react'
export default function (props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked." + text)
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
     const handleLoClick=()=>{
        console.log("Lowercase was clicked." + text)
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

        
    }
    const handleCopyClick=()=>{
        var text=document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard","success")

    }
    const handleSpaceClick=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces cleared.","success")

    }
    const handleClearClick=()=>{
        let newText=" ";
        setText(newText)
        props.showAlert("Text cleared","success")

    }
    const handleUpChange=(event)=>{
        setText(event.target.value)
    }
  const [text,setText]=useState("Enter text here")

  return (<>
 <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control my-3" value={text} onChange={handleUpChange} style={{backgroundColor:props.mode==='light'?'white':'grey',  color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  <button className="btn btn-primary mx-1" onClick={handleUpClick}>Uppercase</button>
  <button className="btn btn-primary mx-1" onClick={handleLoClick}>Lowercase</button>
  <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
  <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
  <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>Space</button>
</div>
</div> <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your text Summary.</h1>
    <p>{text.split(" ").length} words and {text.length} characters.</p>
    <p>{0.008*text.split(" ").length} Minutes required to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter your text"}</p></div> </>
  )
}
