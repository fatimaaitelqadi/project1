import React from 'react'

export default function Btn() {
    function Handlclick(){
        return(
            alert('hello react')
        )
    }
  return (
    <div>
      <button  onClick={Handlclick}>click ici</button>
    </div>
  )
}
