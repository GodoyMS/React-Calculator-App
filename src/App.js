    import { useState, useRef } from "react";
    import "./App.css";
    import React from "react";
    import logo from "./logo.svg"
    import { ExternalLink } from 'react-external-link';

    function App() { 
      const inputRef = useRef(null); 
      const resultRef = useRef(null); 
      const [result, setResult] = useState(0); 
    
      function plus(e) { 
        e.preventDefault(); 
        setResult((result) => result + Number(inputRef.current.value)); 
      }; 
    
      function minus(e) { 
        // Add the code for the minus function 
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
      };
    
      function times(e) { 
        // Add the code for the plus function 
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
      }; 
    
      function divide(e) { 
        // Add the code for the divide function 
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
      };
    
      function resetInput(e) { 
        // Add the code for the resetInput function 
        e.preventDefault();

        inputRef.current.value=0;
      }; 
    
      function resetResult(e) { 
        // Add the code for the resetResult function 
        e.preventDefault();
        setResult((defaultVal)=>defaultVal*0)
      }; 
    
      return ( 
        
        <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo"/ >
        </header>
        
        
          
          <div> 
            <h1>Simple Calculator</h1> 
          </div> 
          <form> 
            <div className="Input-Output">
            <p>Result: </p>
            <p ref={resultRef}> 
              {result} 
            </p>

            </div>
 
            <input
              pattern="[0-9]" 
              ref={inputRef} 
              type="number" 
              placeholder="Type a number" 
            /> 
            <div className="Buttons-math">
            <button onClick={plus}>add</button>
            <button onClick={minus}>substract</button>
            <button onClick={times}>multiply</button>
            <button onClick={divide}>divide</button>
            </div>
            <div className="Buttons-result">
            <button onClick={resetInput}>resetInput</button>
            <button onClick={resetResult}>resetResult</button>

            </div>
            
            

          </form> 
          <footer><ExternalLink href="www.facebook.com"><img src={"https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png"} height="100" alt="github"/> </ExternalLink> <p>All Rights Reserved | Created by:Godoy Muñoz</p></footer>
        </div> 

        
      ); 
    } 
    
    export default App; 
