import React from "react";
import LatestArticleleftfunction from "../LatestArticleleftfunction";
import Mainheading from "../Mainheading";
import image from '../3.jpg';
import Style from './style.module.css';
import TechnologyAdvertisement from './TechnologyAdvertisement';
import Technologytoppost from './Technologytoppost';


export default function MainTechnology(){
    return(
        <>  
            <div className={Style.maincontainer}>
                <div className={Style.mainleft}> 
                    <Mainheading name="Technology"/>
                    <p className={Style.mainhead}></p>
                    <LatestArticleleftfunction name="Elon Musk's inner circle" lin="https://www.businessinsider.in/thumb/msid-95471469,width-700,resizemode-4,imgsize-137250/tech/news/meet-the-members-of-elon-musks-inner-circle-said-to-be-helping-him-fix-twitter/img635cefe40b271e00186b8da5.jpg"/>
                    <LatestArticleleftfunction name="Tech CEO says he was hit with up to $30,000 in surprise taxes" lin="https://www.businessinsider.in/thumb/msid-95460786,width-700,resizemode-4,imgsize-622176/tech/news/tech-ceo-says-he-was-hit-with-up-to-30000-in-surprise-taxes-and-fees-after-a-software-engineer-worked-remotely-in-california-and-texas-without-telling-the-company/img62b0cf1be3600d0018e80474.jpg"/>
                    <LatestArticleleftfunction name="If you use your Android mobile for banking in India..." lin="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"/>
                    <LatestArticleleftfunction name="If you use your Android mobile" lin="https://cdn.mos.cms.futurecdn.net/TS9h5uboSFdqnqqWTsVYQW-970-80.jpg.webp"/>
                    <LatestArticleleftfunction name="We could be waiting a while for the Samsung Galaxy Tab S9" lin="https://cdn.mos.cms.futurecdn.net/BgJLCNCKsNxH6tsC9BvS7g-970-80.jpg.webp"/>
                </div>

                <div className={Style.mainright}>
                    <Mainheading name="Top Posts"/>

                    <div className={Style.postimage}>
                        <img src="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"/>
                        <div className={Style.col}>
                            <div className={Style.leftnumber}>
                                <h4> Microsoft Teams users are using it </h4>
                                <p> <span> Travel </span> / August 21, 2017 </p>
                            </div>
                            <div className={Style.number}> 1 </div>
                        </div>
                    </div>

                    <hr></hr>
                    <Technologytoppost number="2" topallname="Elon Musk's inner circle" toppostallimage="https://www.businessinsider.in/thumb/msid-95471469,width-700,resizemode-4,imgsize-137250/tech/news/meet-the-members-of-elon-musks-inner-circle-said-to-be-helping-him-fix-twitter/img635cefe40b271e00186b8da5.jpg"/>
                    <hr></hr>
                    <Technologytoppost number="3" topallname="Tech CEO says he was hit with up to $30,000 in surprise taxes" toppostallimage="https://www.businessinsider.in/thumb/msid-95460786,width-700,resizemode-4,imgsize-622176/tech/news/tech-ceo-says-he-was-hit-with-up-to-30000-in-surprise-taxes-and-fees-after-a-software-engineer-worked-remotely-in-california-and-texas-without-telling-the-company/img62b0cf1be3600d0018e80474.jpg"/>
                    <hr></hr>
                    <Technologytoppost number="4" topallname="Microsoft" toppostallimage="https://cdn.mos.cms.futurecdn.net/CGyp2r9sbsdSekNPWVh2ta-970-80.jpg.webp"/>

                    <TechnologyAdvertisement/>
                </div>
            </div>
        </>
    )
}