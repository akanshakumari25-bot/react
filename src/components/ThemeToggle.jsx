import { useState } from "react";

function ThemeToggle(){

let [isDarkMode,setIsDarkMode]= useState()


let checkToggle =()=>{

setIsDarkMode((prev)=>!prev)


}

return (

    <div className={isDarkMode ? "dark":"light"}>
    <h2>Is dark mode ? :{isDarkMode ? <span>Dark Mode</span>:<span>Light Mode</span> }</h2>
    <button onClick={checkToggle}>Change theme</button>
    </div>




)
}
export default ThemeToggle;