import React from "react";
import image from './mountain.jpg';
import Mainheading from "./Mainheading";
import styles from './style.module.css';
import LatestArticlerighttoppost from "./LatestArticlerighttoppost";

export default function LatestArticlerightfunction(props){
    return(
        <>
            <div className={styles.rightfunction}>
                <div className={styles.advertisement}>
                    <h1> Advertisement </h1>
                </div>

                <Mainheading name="TOP Posts"/>

                <div className={styles.postimage}>
                    {/* <img src={image}/> */}
                    <img src={props.topimage}/>
                    <div className={styles.col}>
                        <div className={styles.leftnumber}>
                            <h4> {props.topname} </h4>
                            <p> <span> Release </span> / August 21, 2017 </p>
                        </div>
                        <div className={styles.number}> 1 </div>
                    </div>
                </div>
                <hr></hr>
                <LatestArticlerighttoppost number="2" toppostall="Kayseri, Türkiye" toppostallimage="https://images.pexels.com/photos/7770395/pexels-photo-7770395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                <hr></hr>
                <LatestArticlerighttoppost number="3" toppostall="Rogaland, Norway" toppostallimage="https://images.pexels.com/photos/3011823/pexels-photo-3011823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                <hr></hr>
                <LatestArticlerighttoppost number="4" toppostall="Ishak Pasha Palace" toppostallimage="https://images.pexels.com/photos/9140727/pexels-photo-9140727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

            </div>
        </>
    )
}