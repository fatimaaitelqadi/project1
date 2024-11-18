import React from 'react'

export default function Button({handleClick}) {
  return (
    <div>
      <button onClick={handleClick}>click ici</button>
    </div>
  )
}
