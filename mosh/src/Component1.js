import React from 'react'
import "./styleCO1.css"

export default function Component1() {
  const persone={
    name:'sara',
    prenom:'ait elqadi'
  }
  function sayhello(){
    alert('hello react')
  }
  return (
    <div  className={persone.name.length === 4 ? 'sara':'aya'}>
         <h1>hello react</h1>
        <p>{persone.name}</p>
        <p>{persone.prenom}</p>
        <button onClick={sayhello} className='btn'>click ici</button>
    </div>
  )
}