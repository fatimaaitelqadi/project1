import React from 'react'
import ComponentProps1 from './ComponentProps1'

export default function AppC3() {
  return (
    <div>
      <ComponentProps1 age={20} name='fatim' prenom='ait elqadi' email='ait elqadi@gmail.com' ><h1>hello children</h1></ComponentProps1>
      <ComponentProps1 age={20} name='alae' prenom='doni' email='doni@gmail.com' />
      <ComponentProps1 age={20} name='ali' prenom='asir' email='asir@gmail.com' />
    </div>
  )
}
