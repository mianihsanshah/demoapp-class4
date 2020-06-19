import React, { useState } from 'react';  //importing useState from react library
import './App.css';
import {Message} from './message.js';   //importing the custome defined child component message from the message.js library from root folder

function App() {

  let [count, setcount] = useState(1);           //maintaining state of the function state variables using useState
  let [isMorning, setMorning] = useState(true); //maintaining state of the class state variables using useState
  return (
    <div className={`box ${isMorning ? 'dayLight' : 'night'}`}>

      <h1> Have a good {isMorning ? 'Morning' : 'Night'}  </h1>

      <Message counter = {count} />             {/* child component props counter props  */}
      <br />

      <button onClick={()=> setcount(++count)}>Increment Counter</button>
    
      <button onClick={()=>setcount((--count))}>Decrement Counter</button>
        <br />        
      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>     

      
    </div>
  );
}

export default App;
