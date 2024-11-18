import React from 'react'

/*export default function Props(props) {
  return (
    <div>
      <h1>hello {props.name}</h1>
    </div>
  )
}*/
//methode 2 dustrictor

export default function Props({name}) {
    return (
      <div>
        <h1>hello {name}</h1>
      </div>
    )
  }