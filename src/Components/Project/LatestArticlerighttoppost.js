import React from "react";
import styles from './style.module.css';
import image from './mountain.jpg';

export default function LatestArticlerighttoppost(props){
    return(
        <>
            <div className={styles.topcontainer}>
                <div className={styles.topleft}>
                    <img src={props.toppostallimage}/>
                </div>
                <div className={styles.mid}>
                    <h4> {props.toppostall} </h4>
                    <p> <span> Travel </span> / August 21, 2017 </p>
                </div>
                <div className={styles.right}>
                    {props.number}
                </div>
            </div>
        </>
    )
}