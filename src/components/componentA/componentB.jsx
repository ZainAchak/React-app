import React from 'react';
import styles from './component.module.css';
import ComponentC from './componentC';

function ComponentB() {

    return(
        <div className={styles.mainClass}>
            <h1>Component B</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB