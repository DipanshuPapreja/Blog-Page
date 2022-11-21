import React from "react";
import MainPage from "./Bollywood/MainPage";
import Images from "./Images";
import Latest from "./Latest";
import LatestArticleMain from "./LatestArticleMain";
import LatestStories from "./LatestStories";
import Mainheading from "./Mainheading";
import MainLogo from "./MainLogo";
import Navbar from "./Navbar";
import style from './style.module.css';

export default function Home() {
    return (
        <>
                <Images />

                <Mainheading name="The Latest" />
                <Latest />

                <Mainheading name="Latest Article" className={style.Latestarticle}/>
                <LatestArticleMain />
                <p className={style.Lateststories}></p>
                <Mainheading name="Latest Stories"/>
                <LatestStories />

                <hr></hr>

        </>
    )
}