import React from "react";
import LatestArticleleftfunction from "../LatestArticleleftfunction";
import Mainheading from "../Mainheading";
import image from './Brahamastra.jpeg';
import Style from './style.module.css';
import BollywoodAdvertisement from './BollywoodAdvertisement';
import Bollywoodtoppost from './Bollywoodtoppost';


export default function MainPage(){
    return(
        <>  
            <div className={Style.maincontainer}>
                <div className={Style.mainleft}> 
                    <Mainheading name="Bollywood"/>
                    <p className={Style.mainhead}></p>
                    <LatestArticleleftfunction name="83" lin="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/83_film_poster.jpg/220px-83_film_poster.jpg"/>
                    <LatestArticleleftfunction name="Bhool Bhulaiyaa 2" lin="https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg"/>
                    <LatestArticleleftfunction name="Runway 34" lin="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Runway_34_poster.jpg/220px-Runway_34_poster.jpg"/>
                    <LatestArticleleftfunction name="Gangubai Kathiawadi" lin="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRy2mCbfp6Om9k_WICSsDNY8ZWVr6zd48JGlrMTjqWZtt_QYTsO"/>
                    <LatestArticleleftfunction name="Sooryavanshi" lin="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4W4G7izcOIP7yvPdRte4WnCwIo35vmA93bgdwoRl4IlXXD6wA"/>
                    <LatestArticleleftfunction name="Ra.one" lin="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJJmDQCqXE6Rdsw2wjlEHwnFwyuGvd_klkkoJSBGhIAUpaqzuj"/>
                    <LatestArticleleftfunction name="Jersey" lin="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzB_pnMEWuPMFyEgSKgmCtByra8d_Q7kymDu9srOSkuj4iQ193"/>
                    <LatestArticleleftfunction name="Kal Ho Naa Ho" lin="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRHXlDQAHJwrwObgcIY3ZXaowfbP1T8u1nNby6iGViOgaS2ysNy"/>
                </div>

                <div className={Style.mainright}>
                    <Mainheading name="Top Posts"/>

                    <div className={Style.postimage}>
                        <img src={image}/>
                        <div className={Style.col}>
                            <div className={Style.leftnumber}>
                                <h4> Brahmastra Trailer </h4>
                                <p> <span> Travel </span> / August 21, 2017 </p>
                            </div>
                            <div className={Style.number}> 1 </div>
                        </div>
                    </div>

                    <hr></hr>
                    <Bollywoodtoppost number="2" topallname="Runway 34" toppostallimage="https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Runway_34_poster.jpg/220px-Runway_34_poster.jpg"/>
                    <hr></hr>
                    <Bollywoodtoppost number="3" topallname="Ra.One" toppostallimage="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJJmDQCqXE6Rdsw2wjlEHwnFwyuGvd_klkkoJSBGhIAUpaqzuj"/>
                    <hr></hr>
                    <Bollywoodtoppost number="4" topallname="83" toppostallimage="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/83_film_poster.jpg/220px-83_film_poster.jpg"/>

                    <BollywoodAdvertisement/>
                </div>
            </div>
        </>
    )
}