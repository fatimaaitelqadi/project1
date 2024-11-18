import React, { useState } from 'react'

const LikeDislike = () => {
    let [likes,setLikes]=useState(0)
    let [dislikes,setDislikes] = useState(0)
    function handleDislikes(){
        setDislikes(dislikes+1)
    }    
return (
    <div>
      <button onClick={()=>setLikes(likes+1)} > Like </button>
      <button onClick={handleDislikes} >dislike</button> <br/>
      likes : {likes} <br/>
      dislikes : {dislikes}
    </div>
  )
}

export default LikeDislike
