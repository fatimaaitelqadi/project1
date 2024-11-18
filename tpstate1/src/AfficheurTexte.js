import React, { useState } from 'react'

const AfficheurTexte = () => {
    let [isVisible,SetisVisible]=useState(false)
    const handleclick=()=>isVisible? "Bonjour React" :""
  return (

    <div>
      <button onClick={handleclick}>Afficher/Masquer</button>
    </div>
  )
}

export default AfficheurTexte
