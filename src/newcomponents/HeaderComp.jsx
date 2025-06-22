import React from "react"
import reactLogo from '../assets/React.webp'

function HeaderComp() {
    return(
        <header>
          <div>
            <img src={reactLogo} alt="React Logo" />
            <h1>ReactFacts</h1>
          </div>
          <nav>
            <ul className="nav-list">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Contact us</li></a>
            </ul>
          </nav>
        </header>
    )
}

export default HeaderComp