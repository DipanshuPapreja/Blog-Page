import React from "react";
import latest from './latest.jpg';
import styles from './style.module.css';
export default function Latest() {
    return (
        <>
            <div className={styles.latestcontainer}>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="https://images.pexels.com/photos/672451/pexels-photo-672451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                                more well-known as a tourist destination. It has a plethora of temples and palaces</p>

                            <p> <span> Travel </span> / August 21, 2017 </p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                                more well-known as a tourist destination. It has a plethora of temples and palaces</p>

                            <p> <span> Travel </span> / August 21, 2017 </p>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.card}>
                            <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                            <h3>Joshua Tree Overnight Adventure</h3>
                            <p>Gujarat is vastly underrated and it’s a mystery to us why the region isn’t
                                more well-known as a tourist destination. It has a plethora of temples and palaces</p>

                            <p> <span> Travel </span> / August 21, 2017 </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}