import React from 'react'

export default function Onclick() {
    function handleClick(){
        alert('bonjour fatima')
    }
  return (
    <div>
      <button onClick={handleClick}>click ici</button>
    </div>
  )
}
