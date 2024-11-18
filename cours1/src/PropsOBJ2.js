import React from 'react'

/*export default function PropsOBJ2({user}) {
    const {name,age}=user
  return (
    <div>
      <p>name : {name}</p>
      <p>age: {age}</p>
    </div>
  )
}*/
//éstructuration dans le corps du composant
/*export default function PropsOBJ2(props) {
    const {name,age}=props.user
  return (
    <div>
      <p>name : {name}</p>
      <p>age: {age}</p>
    </div>
  )
}*/



//methde  Déstructuration avec un objet imbriqué
export default function PropsOBJ2({user:{name,age}}) {
   // const {name,age}=props.user
  return (
    <div>
      <p>name : {name}</p>
      <p>age: {age}</p>
    </div>
  )
}

//Déstructuration dans les paramètres de la fonction

/*export default function PropsOBJ2({name,age}) {
    // const {name,age}=props.user
   return (
     <div>
       <p>name : {name}</p>
       <p>age: {age}</p>
     </div>
   )
 }*/