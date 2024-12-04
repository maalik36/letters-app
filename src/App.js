//import logo from './logo.svg';
import { text } from 'express';
import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

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
  function Copy(){
    const textarea = document.getElementById("word");
    const text = textarea.value;
    const [success, setSuccess] = useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setSuccess(true);
      } catch (err) {
        console.error("Didn't work ", err);
      }
    }
  }
  function Paste () {
    const textarea = document.getElementById("word");
    const handlePaste = (event) => {
      const pastedText = event.clipboardData.getData();
      textarea.value = pastedText;
    } 
  }
  function Cut () {
    const textarea = document.getElementById("word");
    const text = textarea.value;
    textarea.value = "";
    const [success, setSuccess] = useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setSuccess(true);
      } catch (err) {
        console.error("Didn't work ", err);
      }
    }
  }
  function FormatPainter() {
    const textarea = document.getElementById("word");
    const [format, setFormat] = useState(null);
    const [highlight, setHighlight] = useState('')
    const styles = {
      fontWeight: textarea.style.fontWeight,
      fontStyle: textarea.style.fontStyle,
      textDecoration: textarea.style.textDecoration
    }
    setFormat(styles);
    useEffect(() => 
    {
      const handleMouseUp = () => {
        const selection = window.getSelection;
        if (selection.rangeCount > 0)
        {
          const selectedText = selection.toString();
          setHighlight(selectedText);
          highlight.style = format;
        }
      }
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mouseup', handleMouseUp);
      }
    }, []);
  }
  return (
    <div className="App-header">
      <header>
        <h1 onClick={() => Appear("Home")}>Home</h1>
        <h1 onClick={() => Appear("Insert")}>Insert</h1>
      </header>
      <box className={home} id="Clipboard">
        <p onClick={() => Paste()}>Paste</p>
        <p onClick={() => Cut()}>Cut</p>
        <p onClick={() => Copy()}>Copy</p>
        <p onClick={() => FormatPainter()}>FP</p>
           
      </box>  
            <box className={home} id="Font">
            <p>Times New Roman</p>
            <p onClick={() => Bold()}>B</p>
            <p onClick={() => Italics()}>I</p>
            <p onClick={() => Underline()}>U</p>
            <p onClick={() => Strikethrough()}>strike</p>
            <p onClick={() => SubScript()}>sub</p>
            <p onClick={() => SuperScript()}>super</p>
            <p>Fsize</p>
            <p>IF</p>
            <p>DF</p>
            <p>CC</p>
            <p>RF</p>
            <p>Highlight</p>
            <p>FC</p>

        
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
