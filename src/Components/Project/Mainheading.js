import React from 'react';
import styles from './style.module.css';

function Mainheading(props){
    return(
        <>
            <h1 className={styles.mainheading}> {props.name} </h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default Mainheading;