import React from 'react'

export default function PropsObj(props) {
  return (
    <div>
      <p>name : {props.user.name}</p>
      <p>name : {props.user.age}</p>
      <p>name : {props.user.filier}</p>
    </div>
  )
}
