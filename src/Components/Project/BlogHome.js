import React from "react"
import Navbar from "./Navbar";
import MainLogo from "./MainLogo";

import styles from './style.module.css';

export default function BlogHome() {
    return (
        <>
            <div className={styles.container}>
                <MainLogo/>
                {/* <MainLogo />
                <Navbar />
                <Images />

                <Mainheading name="The Latest" />
                <Latest />

                <Mainheading name="Latest Article" />
                <LatestArticleMain />

                <Mainheading name="Latest Stories" />
                <LatestStories />

                <MainPage /> */}

            </div>
        </>
    )
}