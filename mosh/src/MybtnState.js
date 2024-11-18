import React from 'react'

export default function MybtnState() {
    function btn(){
        alert('click')
    }
    const name='fatuy'
  return (
    <div>
      <button onClick={btn} >click ici</button>
      <h1>{name}</h1>
    </div>
  )
}
