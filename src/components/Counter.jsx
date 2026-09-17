import { useState } from "react"


function Counter(){

  let [count ,setCount] = useState(0)

let Increment = ()=>{
  setCount((prev)=>prev+1);
}

let Decrement = ()=>{
setCount((prev)=>prev-1);}

let Reset = ()=>{
setCount((prev)=>prev*0);}





return(
  <div className="Counter">
    <h2>Data:{count}</h2>
    <button onClick={Increment}>+</button>
     <button onClick={Decrement}>-</button>
    <button onClick={Reset}>Reset</button>


  </div>
)

}

export default Counter;