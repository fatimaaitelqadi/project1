import React from 'react'

export default function List(props) {
    //const list=['appel','banana','orange']
  return (
    <ul>{props.item.map((element,indice)=> element.lenght !==0 ? <li key={indice}>{element}</li> : null )}</ul>
  )
}
