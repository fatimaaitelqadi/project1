import React from 'react'



const IsTrue=true
const message=IsTrue?<Button1 />:<Buttuon2 />

function Button1(){
    return(
        <button>click ici</button>
    )
}
function Buttuon2(){
    return(
        <button> No click ici</button>
    )
}

function Test1() {
  return (
    <div>
      <h1>hello my new cours in the react </h1>
      {message}
    </div>
  )
}
export default Test1;
