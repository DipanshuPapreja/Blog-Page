import React from "react";
import image from './LatestArticle.jpg';
import styles from './style.module.css';

export default function LatestArticleleftfunction(props) {
    return (
        <>
            <hr className={styles.bollywoodline}></hr>
            <div className={styles.boxcontainer}>
                <div className={styles.boxleft}>
                    {/* <img src={image} /> */}
                    <img src={props.lin}/>
                </div>

                <div className={styles.boxright}>
                    <h3> {props.name} </h3>
                    <p> Nong Chaeng is a city in Phetchabun, Thailand. It has many popular attractions, including Mae Hong Son Mountain Wat, making it well worth a visit. </p>

                    <p> <span> Travel </span> :- August 21, 2017 </p>
                </div>
            </div>
        </>
    )
}