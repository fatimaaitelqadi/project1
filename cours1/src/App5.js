import React from 'react'
import PropsObj from './propsOBJ'

export default function App5() {
    const user={
        name:'sara',
        age:'20',
        filier:'dev'
    }
  return (
    <div>
      <PropsObj  user={user}/>
    </div>
  )
}
