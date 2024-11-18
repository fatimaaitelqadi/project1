import React,{useState} from "react"
export default function StateFunction1() {
    let [count,setCount]=useState(0)
    function incrémenter(){
        setCount(count+1)
    }
    function décrementer(){
        setCount(count-1)
    }
    
    

  return (
    <div>
        Count : {count} <br/>
        <button onClick={incrémenter} >incrémenter</button>
        <button onClick={décrementer} >décrementer </button>

    </div>
  )
}
