import React,{useContext} from 'react';
import styles from './component.module.css';
import { Username } from './componentA';


function ComponentD() {
    const username = useContext(Username);

    return(
        <div className={styles.mainClass}>
            <h1>Component D</h1>
            <span>{`Bye ${username}`}</span>
        </div>
    )
}

export default ComponentD