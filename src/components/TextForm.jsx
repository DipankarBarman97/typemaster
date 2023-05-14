import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const TextForm = (props) => {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("OnClick : " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowClick = () => {
        // console.log("LowerCase");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleCopy = () => {
        let newText = document.getElementById("exampleFormControlTextarea1");
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy to clipboard!", "success");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces has been removed!", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Textarea has been cleared!", "danger");
    }

    const handleOnClick = (event) => {
        // console.log("OnChange");
        setText(event.target.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? '#F4EEE0' : '#393646' }}>
                <h2 className='my-2'>{props.heading}</h2>
                <div className="mb-4 shadow">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnClick} placeholder='Enter Text here' style={{background: props.mode==='light'?'#F4EEE0':'#4F4557', color: props.mode==='dark'?'#F4EEE0':'#393646'}} />
                </div>

                <Button variant="primary" className='my-1 mx-1' onClick={handleUpClick}>Convert to Uppercase</Button>
                <Button variant="primary" className='my-1 mx-1' onClick={handleLowClick}>Convert to Lowercase</Button>
                <Button variant="success" className='my-1 mx-1' onClick={handleCopy}>Copy Text</Button>
                <Button variant="secondary" className='my-1 mx-1' onClick={handleSpaces}>Remove Extra Spaces</Button>
                <Button variant="danger" className='my-1 mx-1' onClick={handleClearClick}>Clear Text</Button>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? '#F4EEE0' : '#393646' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters.</p>
                <p>{0.008 * text.split(" ").length} Minutes to read.</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Something in the text box above to preview it here."}</p>
            </div>
        </>
    )
}

export default TextForm
