import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('The text has been converted to uppercase', 'success');
  };

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleLowerClick = (e) => {
    let lowCase = text.toLowerCase();
    setText(lowCase);
    props.showAlert('The text has been converted to lowercase!', 'success');
  };

  const handleCopy = () => {
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied to Clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let extraSpace = text.split(/[ ]+/);
    setText(extraSpace.join(' '));
    props.showAlert('Extra spaces have been removed!', 'success');
  };

  const handleResetClick = (e) => {
    let reset = '';
    setText(reset);
    props.showAlert('The text has been reset!', 'success');
  };

  return (
    <div>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : 'grey',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleLowerClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-2" onClick={handleResetClick}>
          Reset Text
        </button>
      </div>
      <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your text Summary</h2>
        <p>
          {text.length === 0 ? 0 : text.trim().split(' ').length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(' ').length} Minutes to read</p>
        <h2 className="my-4">Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </div>
  );
}

// if(text.length === 0 ? 0 : text.trim().split(' ').length)
