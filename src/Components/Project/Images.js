import React from "react";
import styles from './style.module.css';

export default function Images(){
    return(
        <>

            <div className={styles.cont}>
                <div className={styles.imageleft}> 
                    <h1> Lake Louise, AB, CANADA </h1>
                    <p> Travel / August 21 2017 </p>
                </div>
                <div className={styles.imageright}>
                    <div className={styles.imagetop}>
                        <h1> Barra de camaratuba, PB, BRAZI </h1>
                        <p> Travel / August 21 2017 </p>
                    </div>
                    <div className={styles.imagebottom}>
                        <h1> Boating </h1>
                        <p> Travel / August 21 2017 </p>
                    </div>
                </div>
            </div>
            
        </>
    )
}