import './App.css';
import { useState } from 'react';

function App() {
  const [count,setCount]=useState(0)
  const [userIncreaseDecreaseValue,setUserIncreaseDecreaseValue]=useState(1)

  const incrementsAndDecrements = [-100, -50, -25, -20, -10, -5, -3, -2, -1, 1, 2, 3, 5, 10, 20, 25, 50, 100]

  const handleAutoCount = () => {
    setInterval(()=>{
      if(count === setCounterEndPoint){clearInterval(count)}
      else {
      setCount(prev=>prev+Number(userIncreaseDecreaseValue))}
    },1000)
  };
  const handleStopCount = () => {
    clearInterval(count);
    setCount(0)
  };

  const [counterEndPoint,setCounterEndPoint]= useState(120)



  return (
    <div className="App">

      <div className='title'>
        <h1>Counter Strike 1.3</h1>
        <h1 className='digitalcounter'>{count}</h1>
      </div>

      <div className='countbasic'>
        <button className='btn decrease' onClick={()=>setCount(count-Number(userIncreaseDecreaseValue))}>Decrease</button>
        <button className='btn reset' onClick={()=>setCount(0)}>Reset</button>
        <button className='btn increase' onClick={()=>setCount(count+Number(userIncreaseDecreaseValue))}>Increase</button><br /><br />
      </div>
      
      <input className='userinput' placeholder='Type Your Increase/Decrease Value' onChange={(e)=>setUserIncreaseDecreaseValue(e.target.value)} /><br /><br />

      <div className='defultIncDecValues'>
        {incrementsAndDecrements.map((value,index)=>{
          //The map function returns a value and  an index then we can assing them as key property and value variable
          return <button className='orderednumbers' id='orderednumbers' key={index} onClick={()=>setCount(count + value)}>{value}</button> 
        })} <br /><br />
      </div>

      <div className='endPoint'>
        <input className='endpointinput' placeholder='Where should the counter end?' onChange={(event)=>setCounterEndPoint(event.target.value)} /> <br />
        <label>Counter stops at {counterEndPoint} as default</label> 
        <br /><br />
      </div>
        
      
      <div className='autoCount'>
        <button className='startstop' onClick={handleAutoCount}>Start Auto Count</button>
        <button className='startstop' onClick={handleStopCount}>Stop Auto Count</button>
      </div>
      
    </div>
  );
}

export default App;
