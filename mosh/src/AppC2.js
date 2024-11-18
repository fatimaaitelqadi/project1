import React from 'react'
import Haider from './Haider'
import Meni from './Meni'
import Meni2 from './Meni2'

export default function AppC2() {
  return (
<div>
  
    <div>
      <Haider />
      </div>


      <div style={{display:'flex' ,}}>
    <div>
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      <Meni />
      </div>
<div style={{border:'1px solid black', width:'50%', height:'50%' , textAlign:'center'}} >
<div style={{display:'flex', textAlign:'center'}}>
      <Meni2 />
      <Meni2 /> </div> <br/>
      <div style={{display:'flex'}}>
      <Meni2 />
      <Meni2 /> </div> <br/>
      <div style={{display:'flex'}}>
      <Meni2 />
      <Meni2 /> </div> <br/><div style={{display:'flex'}}>
      <Meni2 />
      <Meni2 /> </div> <br/>
      </div>
    </div>

    </div>
  )
}
