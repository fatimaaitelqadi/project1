import React,{useState} from 'react'

export default function Formulaire() {
    let [nom,setNom] = useState('')
    let [prenom,setPrenom] = useState('')
    let [salaire,setSalaire] = useState('')
    let [Infos,SetInfos] = useState('')
const handleSubmit = (e)=>{
    e.preventDefault();
    SetInfos(`Nom : ${nom}, Prenom : ${prenom},Salaire : ${salaire}`)
    
}
return (
    <div>
        <h2>Formulaire</h2>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <table>
                <tbody>
                    <tr>
                        <td>Nom :</td>
                        <td><input type='text' onChange={(e)=>setNom(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>Prenom :</td>
                        <td><input type='text' onChange={(e)=>setPrenom(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td>Salaire :</td>
                        <td><input type='text' onChange={(e)=>setSalaire(e.target.value)} /> </td>
                    </tr>
                    <tr>
                        <td colSpan={2} ><button type='submit' >Submit</button></td>
                    </tr>
                </tbody>

            </table>
        </form>
        {Infos && <div> Infos Employé : {Infos} </div> }



    </div>
  )
}
