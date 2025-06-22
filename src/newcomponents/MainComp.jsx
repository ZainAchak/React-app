import React from "react"
import ReactImage from "../assets/React.webp"

function MainComp() {
    return(
        <main>
            <img className="BackgroundImage" src={ReactImage} alt="" />
            <h1>Fun Facts about React!</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit.</li>
                <li>Possimus doloribus nam facere, quod</li>
                <li>Numquam voluptatum placeat libero sint</li>
                <li>Nisi aliquid vitae, in illo nemo ducimus repellendus incidunt corrupti eveniet vel?</li>
            </ul>
        </main>
    )
}

export default MainComp