import React from 'react'
import PersonDetails from './PersonDetails'
export default function App4() {
    const user={
        name:'asir',
        prenom:'aya',
        age:20
    }
  return (
    <div>
      <PersonDetails user={user}/>
    </div>
  )
}
