import { useEffect, useRef } from "react";
import "./App.css";


function App() {
const changeColor = useRef()

useEffect(() => {
 const time = setInterval(() => {
 
 if (changeColor.current.style.backgroundColor === "red") {
  return changeColor.current.style.backgroundColor = "blue"
 }if (changeColor.current.style.backgroundColor === "blue") {
  return changeColor.current.style.backgroundColor = "red"
 }
 return changeColor.current.style.backgroundColor = "red"
 },1000)

 return () => clearInterval(time)
})

  return (
    
      <div
        style={{width:"300px",height:"300px", margin:"auto"}}
        ref={changeColor}
      >
       
      </div>
   
  );
}

export default App;
