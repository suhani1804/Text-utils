import React, { useState } from "react";
import axios from "axios";

export default function Textform(props) {
  function handelupclick() {
    let newText = Text.toUpperCase();
    setText(newText);
  }
  function handelLowclick() {
    let newText = Text.toLowerCase();
    setText(newText);
  }
  function handelCapclick(Text) {
    let s = Text.split(" ");
    let cap = [];
    s.forEach((Element) => {
      let newText = cap
        .push(Element[0].toUpperCase() + Element.slice(1, Element.length))
        .join(" ");
      setText(newText);
    });
    return setText;
  }
  function handelCopy() {
    let Text = document.getElementById("text");
    Text.select();
    navigator.clipboard.writeText(Text.value);
  }

  function handelExtraSpace() {
    let newText = Text.split(/[]+/);
    let s = newText.join(" ");
    setText(s);
  }

  function Apipull()
  {
    axios.get("https://official-joke-api.appspot.com/random_joke").then((Response)=>
    {
      setText(Response.data.setup+" ... "+Response.data.punchline);
    })
  }

  const handelonchange = (event) => {
    setText(event.target.value);
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div className="container bg-">
        <h3 className="mt-5">{props.heading}</h3>
        <div className="mb-2">
          <textarea
            className="form-control"
            onChange={handelonchange}
            id="text"
            rows="8"
            value={Text}
            style={{backgroundColor: props.mode==='dark'?'#2e3236':'white'}}
          ></textarea>
          {/*  */}
          <button className="btn btn-primary mx-1 my-2" onClick={handelupclick}>
            Convert to upper case
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handelLowclick}
          >
            Convert to lower case
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handelCapclick}
          >
            Convert to capital case
          </button>
          <button className="btn btn-primary mx-1 my-2" onClick={handelCopy}>
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={handelExtraSpace}
          >
            Remove Extra space
          </button>
          <button
            className="btn btn-primary mx-1 my-2"
            onClick={Apipull}
          >
            Request pull
          </button>
        </div>
        <div className="summery my-2">
          <h3>Your text summery</h3>
          <p>
            {Text.split(" ").length} words and {Text.length} characters
          </p>
          <p>you can read the text in {0.008 * Text.split(" ").length} time</p>
        </div>
        <div className="preview">
          <h4>Your page preview</h4>
          <p>{Text.length>0 ?Text:"Enter something in the above textbox to preview it here"}</p>
        </div>
      </div>
    </>
  );
}
