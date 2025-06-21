import React,{useContext} from 'react';
import styles from './component.module.css';
import ComponentD from './componentD';
import { Username } from './componentA';

function ComponentC() {
    const name = useContext(Username);
    return(
        <div className={styles.mainClass}>
            <h1>{`Component C is for ${name}`}</h1>
            <ComponentD/>
        </div>
    )
}

export default ComponentC