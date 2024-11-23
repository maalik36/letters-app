//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState("gone");
  function Appear()
  {
    //let state = document.getElementById('sub');
    //state.style.display = "block";
    console.log("yes");
    alert("yes");
    setDisplay("here");
  };
  return (
    <div className="App-header">
      <header>
        <h1 onClick={() => Appear()}>Home</h1>
        <div>
          <h2 className={display}>Clipboard</h2>
            <p className={display}>Paste</p>
            <p className={display}>Cut</p>
            <p className={display}>Copy</p>
            <p className={display}>Format Painter</p>
        </div>
        <div>
          <h2 className={display}>Font</h2>
            <p className={display}>Time New Roman</p>
            <p className={display}>Bold</p>
            <p className={display}>Italics</p>
            <p className={display}>Underline</p>
            <p className={display}>strikethrough</p>
            <p className={display}>subscript</p>
            <p className={display}>superscript</p>
            <p className={display}>font size</p>
          </div>  
          
      </header>
      
       
    </div>
  );
  
  /*
  document.getElementById('sub').style.display = 'block'
  Edit <code>src/App.js</code> and save to reload.
  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <img src={logo} className="App-logo" alt="logo" />
                      <Headers>
                        
                        
                    </Headers>
                    */
}

export default App;
