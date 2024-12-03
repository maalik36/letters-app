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
    const element = document.getElementById("word")
    element.style.fontWeight = "bold"
  }
  function Italics() {
    const element = document.getElementById("word")
    element.style.fontStyle = "italic"
  }
  function Underline(){
    const element = document.getElementById("word")
    element.style.textDecoration = "underline"
  }
  function Strikethrough(){
    const element = document.getElementById("word")
    element.style.textDecoration = "line-through"
  }
  function SubScript(){
    const element = document.getElementById("word")
    element.style.verticalAlign = "sub"
  }
  function SuperScript(){
    const element = document.getElementById("word")
    element.style.verticalAlign = "super"
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
            <p>Times New Roman</p>
            <p onClick={() => Bold()}>Bold</p>
            <p onClick={() => Italics()}>Italics</p>
            <p onClick={() => Underline()}>Underline</p>
            <p onClick={() => Strikethrough()}>strikethrough</p>
            <p onClick={() => SubScript()}>subscript</p>
            <p onClick={() => SuperScript()}>subscript</p>
            <p>font size</p>
            
        
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
      
      
      <textarea id='word'>
      
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
