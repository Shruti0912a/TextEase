import React, {useState}from "react";

export default function Forms() {

    const[text, setText]= useState("Enter text here")

    const changeButton= ()=>{
     let newText=text.toUpperCase();
     setText(newText);
    }

    const handleOnChange=(event)=>{
     setText(event.target.value);
    }
  return (
    <div>
      <div className="container">
        <h1>Enter the text to analyse below</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={text} onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={changeButton}>Convert to Uppercase</button>
      </div>
    </div>
  );
}
