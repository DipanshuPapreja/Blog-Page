import React from "react";
import LatestArticleleftfunction from "../LatestArticleleftfunction";
import Mainheading from "../Mainheading";
import image from '../3.jpg';
import Style from './style.module.css';
import HollywoodAdvertisement from './HollywoodAdvertisement';
import Hollywoodtoppost from './Hollywoodtoppost';


export default function MainPage(){
    return(
        <>  
            <div className={Style.maincontainer}>
                <div className={Style.mainleft}> 
                    <Mainheading name="Hollywood"/>
                    <p className={Style.mainhead}></p>
                    <LatestArticleleftfunction name="Top Gun: Maverick" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>
                    <LatestArticleleftfunction name="Doctor Strange: In The Multiverse Of Madness" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"/>
                    <LatestArticleleftfunction name="Top Gun: Maverick" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>
                    <LatestArticleleftfunction name="Doctor Strange: In The Multiverse Of Madness" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"/>
                    <LatestArticleleftfunction name="Top Gun: Maverick" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>
                    <LatestArticleleftfunction name="Doctor Strange: In The Multiverse Of Madness" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"/>
                    <LatestArticleleftfunction name="Doctor Strange: In The Multiverse Of Madness" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"/>
                    <LatestArticleleftfunction name="Top Gun: Maverick" lin="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>
                </div>

                <div className={Style.mainright}>
                    <Mainheading name="Top Posts"/>

                    <div className={Style.postimage}>
                        <img src="https://images.pexels.com/photos/2695679/pexels-photo-2695679.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1&quot;);"/>
                        <div className={Style.col}>
                            <div className={Style.leftnumber}>
                                <h4> Los Angeles,CA, Verenigde Staten </h4>
                                <p> <span> Travel </span> / August 21, 2017 </p>
                            </div>
                            <div className={Style.number}> 1 </div>
                        </div>
                    </div>

                    <hr></hr>
                    <Hollywoodtoppost number="2" topallname="Top Gun: Maverick" toppostallimage="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>
                    <hr></hr>
                    <Hollywoodtoppost number="3" topallname="Doctor Strange: In The Multiverse Of Madness" toppostallimage="https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg/220px-Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg"/>
                    <hr></hr>
                    <Hollywoodtoppost number="4" topallname="Top Gun: Maverick" toppostallimage="https://upload.wikimedia.org/wikipedia/en/thumb/1/13/Top_Gun_Maverick_Poster.jpg/220px-Top_Gun_Maverick_Poster.jpg"/>

                    <HollywoodAdvertisement/>
                </div>
            </div>
        </>
    )
}