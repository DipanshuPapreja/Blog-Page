import React from "react";
import styles from './style.module.css';

export default function LatestStories(){
    return(
        <>
            
            <div className={styles.stories}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <h3>Catch waves with an adventure guide</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t 
                            more well-known as a tourist destination. It has a plethora of temples and palaces 
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                             as a tourist destination. It has a plethora of temples and palaces</p>

                            <p> <span> TECH </span> / Today At 11:54 </p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <h3>Catch waves with an adventure guide</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t 
                            more well-known as a tourist destination. It has a plethora of temples and palaces 
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                            as a tourist destination. It has a plethora of temples and palaces</p>

                            <p> <span> STYLE </span> / August 21, 2017 </p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <h3>Catch waves with an adventure guide</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t 
                            more well-known as a tourist destination. It has a plethora of temples and palaces 
                            Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known
                            as a tourist destination. It has a plethora of temples and palaces</p> 

                            <p> <span> TECH </span> / August 21, 2017 </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}