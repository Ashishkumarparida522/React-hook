import logo from './logo.svg';
import  React,{useState} from 'react';
import './App.css';


function App() {


  let [value,setValue]=useState(10);

  const addValue=()=>
  {
    setValue(value+1);
   
  }
const rmvValue=()=>
{
  setValue(value-1);
}
  return (  
    <div className="container">
      <h1>Hello</h1>
      <h3>counter value {value}  </h3>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button onClick={rmvValue}>Reomve value </button>
    </div>

  )
}

export default App;
