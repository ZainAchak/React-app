import React, {useState, createContext} from "react"
import styles from './component.module.css';
import ComponentB from "./componentB";

export const Username = createContext();

function ComponentA() {
    const [user,setUser] = useState("Zain")

    return(
        <div className={styles.mainClass}>
            <h1>Component A</h1>
            <span style={{fontSize:'1.5rem'}}>{`Hello ${user}`}</span>
            
            <Username.Provider value={user}>
                <ComponentB/>
            </Username.Provider>
            
        </div>
    )
}

export default ComponentA