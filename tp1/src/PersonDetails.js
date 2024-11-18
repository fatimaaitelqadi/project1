import React from 'react'

export default function PersonDetails(user) {
    const {name,prenom,age}=user

  return (
    <div>
      <h1>name: {name}</h1>
      <h1>name: {prenom}</h1>
      <h1>name: {age}</h1>
    </div>
  )
}
