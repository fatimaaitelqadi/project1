import React from 'react'

/*export default function ComponentProps1(props) {
    const style={
        backgroundColor:'black',
        color:'yellow',
        width:'50%',
        height:'50%',
        textAlign:'center',
        


    }
    const age=props.age
  return (
    <div style={style}>
      <h1>fatima</h1>
      <h2>ait elqadi</h2>
      <h3>fatima@gmail.com</h3>
      <hr/>
      <h2>age: {props.age}</h2>
      <h2>age: {age}</h2>
    </div>
  )
}*/
export default function ComponentProps1(props/*{age,name,prenom,email}*/) {
    const style={
        backgroundColor:'black',
        color:'yellow',
        width:'50%',
        height:'50%',
        textAlign:'center',
        


    }
    const children=props.children
    //const age=props.age
    //method tanya ndiro f parametre dyal function
  return (
    <div style={style}>
      <h1>{children}</h1>
  <h2>{props.prenom}</h2>
      <h3>{props.email}</h3>
      <hr/>
    { /* <h2>age: {props.age}</h2> */}
     { /*<h2>age: {age} ans</h2>*/}
    </div>
  )
}
