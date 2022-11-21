import React from "react";
import image from './mountain.jpg';
import LatestArticleleftfunction from "./LatestArticleleftfunction";
import LatestArticlerightfunction from "./LatestArticlerightfunction";
import styles from './style.module.css';

export default function LatestArticleMain() {
    return (
        <>
            <div className={styles.maincontainer}>
                <div className={styles.left}>
                    <LatestArticleleftfunction name="Tambon Nong Chaeng, Thailand" lin="https://images.pexels.com/photos/238631/pexels-photo-238631.jpeg?cs=srgb&dl=pexels-flo-maderebner-238631.jpg&fm=jpg"/>
                    <LatestArticleleftfunction name="Mount Fuji, Japan" lin="https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Moab, UT, United States" lin="https://images.pexels.com/photos/62600/pexels-photo-62600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Pakualaman, Jogja, Indonesia" lin="https://images.pexels.com/photos/737586/pexels-photo-737586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

                    <div className={styles.big}>
                        <h4> Catch waves with an adventure guide </h4>
                        <p> Travel / August 21, 2017 </p>
                    </div>
                </div>

                <div className={styles.right}>
                    <LatestArticlerightfunction topname="Braies, Trentino-Alto Adige, Italy" topimage="https://images.pexels.com/photos/3087240/pexels-photo-3087240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                </div>
            </div>
        </>
    )
}