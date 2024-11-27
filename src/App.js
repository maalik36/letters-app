//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [home, setHome] = useState("gone");
  const [insert, setInsert] = useState("gone");
  const [bold, setBold] = useState("normal")
  function Appear(word)
  {
    //let state = document.getElementById('sub');
    //state.style.display = "block";
    if (word === "Home")
    {
      setHome("here");
      setInsert("gone");
    }
    else if (word === "Insert")
    {
      setInsert("here");
      setHome("gone");
    }
    
  };

  function Bold() {
    setBold("bold")
  }
  return (
    <div className="App-header">
      <header>
        <h1 onClick={() => Appear("Home")}>Home</h1>
        <h1 onClick={() => Appear("Insert")}>Insert</h1>
      </header>
      <box className={home} id="Clipboard">
        
            Paste
            Cut
            Copy
            Format Painter
      </box>  
            <box className={home} id="Font">
            Time New Roman
            Bold
            Italics
            Underline
            strikethrough
            subscript
            superscript
            font size
        
      </box>  
        
            <box className={insert}>
              Cover Page
              Blank Page
              Page Break
            </box>
              
        
      <header>
        <h2 className={home}>Clipboard</h2>
        <h2 className={home}>Font</h2>
      </header>  
      
      
      <textarea className={bold}>
      
      </textarea>   
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
