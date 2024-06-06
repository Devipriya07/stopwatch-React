import { useState, useEffect } from "react";
import "./App.css";

function App () {
    const [ seconds, setSeconds ] = useState(0);
    const [ minutes, setMinutes ] = useState(0);
    const [ isRunning, setIsRunning ] = useState(false);

    useEffect(() => {
        
        let timer;
        if(isRunning){
            timer = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds === 59) {
                        setMinutes((previousMinutes) => previousMinutes + 1);
                        return 0;
                    }
                    return prevSeconds + 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);

    }, [isRunning])

    const reset = () => {
        setIsRunning(false);
        setSeconds(0);
        setMinutes(0);
    }

return (
    <div className="container">
        <div className="box">
            <h1>Stopwatch</h1>
            <p>Time: {minutes}:{seconds < 10 ? "0"+ seconds : seconds}</p>
        <div>  {isRunning ? (
                <>
                <button onClick={() => setIsRunning(false)}>Stop</button>
                <button onClick={reset}>Reset</button>
                </>   
            ) : (
                <>
                <button onClick={() => setIsRunning(true)}>Start</button>
                <button onClick={reset}>Reset</button>
                </>
                )     
            }
        </div> 
        </div>  
    </div>
    )
}

export default App;

// page Works fine but didnt pass the testcase(check for any logic error)
//(1) main error:inital state of the stop watch is not initialised
// 2) tests the reset functionality of the stopwatch
// 3) verifies continuous operation of the stopwatch
// 4) verifies the time format is correct
// 5) tests boundary conditions around 59 seconds to 1 minute)

// import './App.css';
// import {useEffect, useRef, useState } from 'react';

// function App() {

//   const[isActive, setActive]=useState(false)
//   const intRef =useRef(null);
//   const[time,setTime]=useState(0);


//   //only using useEffect method works correct.
//   // write all the condition for when its active inside the useEffect
//   useEffect(() => {
//     if (isActive) {  
//       intRef.current = setInterval(() => {
//         setTime(prevTime => prevTime + 1);
//       }, 1000);
//     } 
//     else { 
//       clearInterval(intRef.current);
//     }
//     return () => clearInterval(intRef.current); 
//   }, [isActive]); 

//   const st = () => {
//     setActive(true);
//   };

  
// //  const st=()=>{
// //     if(!isActive){
// //       setActive(true);
// //       intRef.current=setInterval(()=>{
// //       setTime(prev=>prev+1); 
// //     }, 1000);
// //     }
// //   };

//   function stop(){
//     if(isActive===true){
//       setActive(false);
//     clearInterval(intRef.current);
//     }
//   }
//   function reset(){
//     setActive(false);
//     clearInterval(intRef.current);
//     setTime(0);
//   }
//   const formatTime = (seconds) => {
//     const getSeconds = `0${seconds % 60}`.slice(-2);
//     const minutes = `${Math.floor(seconds / 60)}`;
//     const getMinutes = `0${minutes % 60}`.slice(-1);
//     // const getHours = `0${Math.floor(seconds / 3600)}`.slice(-2);
//     // return `${getHours}:${getMinutes}:${getSeconds}`;
//     return `${getMinutes}:${getSeconds}`;

//   };
//   return (
//     <div className="App">
//         <h1>Stopwatch</h1>
//         <h3>Time:{formatTime(time)}</h3>
//         { !isActive? <button onClick={st}>Start</button> 
//         : <button onClick={stop}>Stop</button> }
//         <button onClick={reset}>Reset</button> 
//     </div>
//   );
// }

// export default App;
