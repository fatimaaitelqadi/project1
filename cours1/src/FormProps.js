import React, { Children } from 'react'

export default function FormProps({lastName,FirstName}) {
  return (
    <div>
      <label>{lastName}</label>
      <input name={FirstName} type='text'></input>
    </div>
  )
}
