import React from "react";
import LatestArticleleftfunction from "../LatestArticleleftfunction";
import Mainheading from "../Mainheading";
import image from '../3.jpg';
import Style from './style.module.css';
import FitnessAdvertisement from './FitnessAdvertisement';
import Fitnesstoppost from './Fitnesstoppost';


export default function MainFood(){
    return(
        <>  
            <div className={Style.maincontainer}>
                <div className={Style.mainleft}> 
                    <Mainheading name="Fitness"/>
                    <p className={Style.mainhead}></p>
                    <LatestArticleleftfunction name="Gym Exercise" lin="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="7 benefits of regular physical activity" lin="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Gym Exercise" lin="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="7 benefits of regular physical activity" lin="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Gym Exercise" lin="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="7 benefits of regular physical activity" lin="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Gym Exercise" lin="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="7 benefits of regular physical activity" lin="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>

                <div className={Style.mainright}>
                    <Mainheading name="Top Posts"/>

                    <div className={Style.postimage}>
                        <img src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1&quot;);"/>
                        <div className={Style.col}>
                            <div className={Style.leftnumber}>
                                <h4> 10 Ways to Move More in Everyday Life </h4>
                                <p> <span> Travel </span> / August 21, 2017 </p>
                            </div>
                            <div className={Style.number}> 1 </div>
                        </div>
                    </div>

                    <hr></hr>
                    <Fitnesstoppost number="2" topallname="Gym Exercise" toppostallimage="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <hr></hr>
                    <Fitnesstoppost number="3" topallname="7 benefits of regular physical activity" toppostallimage="https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <hr></hr>
                    <Fitnesstoppost number="4" topallname="Gym Exercise" toppostallimage="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

                    <FitnessAdvertisement/>
                </div>
            </div>
        </>
    )
}