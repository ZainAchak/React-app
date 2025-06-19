import React from 'react';

function ProfilePitcure() {
    const imgUrl = './src/assets/profile.png';
    const handleClick = (e) => e.target.style.border = "2px solid black";
    return(
        <img className="imgClass" onClick={(e)=>handleClick(e)} src={imgUrl} alt="" />
    )
    
}

export default ProfilePitcure