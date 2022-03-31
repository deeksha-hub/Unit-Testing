import './App.css';
import React, { useState } from 'react'
function App() {

const [counter,setCounter]=useState(0);

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src='' className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <h1>This is counter App</h1>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h1>This is counter App</h1>
      <h3 id="counter-value">{counter}</h3>
      <button id="increment-btn" onClick={()=>setCounter(counter+1)}>Increment</button>
      <button id="decrement-btn" onClick={()=>setCounter(counter-1)}>Decrement</button>
    </div>
  );
}

export default App;
