//import logo from "./logo.svg";
import Navbar from "./components/Navbar"
import "./App.css";
import Textform from "./components/Textform.js";
import Alert from "./components/Alert.js";
import React ,{useState}from 'react'

// import Ab./components/About";

// let name="Suhani"
function App() {
  const [mode,setmode]=useState("light");

  const togglemode=()=>
  {
    if(mode==="dark")
    {
      setmode("light")
      document.body.style.color='black';
      document.body.style.background='white';
    }
    else{
      setmode("dark")
      document.body.style.background='#2e3236';
      document.body.style.color='white';
    }
  }
  
  return (
    <>
    {/* <Navbar title="My-website" about="my about"/> */}
    <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
    <Alert text="This is the alert text"/>
    <div className="container my-3">
    <Textform heading="Enter the text to convert"/>
    {/* <About/> */}
    </div>
    
    </>
    
  );
}

export default App;
