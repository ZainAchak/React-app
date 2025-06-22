import React from "react"
import headerLogo from "../../assets/globe.png"

export default function HeaderComp(){
    return(
        <header>
            <img src={headerLogo} alt="globe icon" />
            <h2>my travel journal</h2>
        </header>
        
    )
}