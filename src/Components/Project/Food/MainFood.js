import React from "react";
import LatestArticleleftfunction from "../LatestArticleleftfunction";
import Mainheading from "../Mainheading";
import image from '../3.jpg';
import Style from './style.module.css';
import FoodAdvertisement from './FoodAdvertisement';
import Foodtoppost from './Foodtoppost';


export default function MainFood(){
    return(
        <>  
            <div className={Style.maincontainer}>
                <div className={Style.mainleft}> 
                    <Mainheading name="Food"/>
                    <p className={Style.mainhead}></p>
                    <LatestArticleleftfunction name="Spicy Rolls" lin="https://images.pexels.com/photos/9328497/pexels-photo-9328497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Tasty Spicy Pizza" lin="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Spicy Rolls" lin="https://images.pexels.com/photos/9328497/pexels-photo-9328497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Tasty Spicy Pizza" lin="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Spicy Rolls" lin="https://images.pexels.com/photos/9328497/pexels-photo-9328497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Tasty Spicy Pizza" lin="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <LatestArticleleftfunction name="Spicy Rolls" lin="https://images.pexels.com/photos/9328497/pexels-photo-9328497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <LatestArticleleftfunction name="Tasty Spicy Pizza" lin="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                </div>

                <div className={Style.mainright}>
                    <Mainheading name="Top Posts"/>

                    <div className={Style.postimage}>
                        <img src="https://images.pexels.com/photos/45202/brownie-dessert-cake-sweet-45202.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1&quot;);"/>
                        <div className={Style.col}>
                            <div className={Style.leftnumber}>
                                <h4> Catch waves with an adventure guide </h4>
                                <p> <span> Travel </span> / August 21, 2017 </p>
                            </div>
                            <div className={Style.number}> 1 </div>
                        </div>
                    </div>

                    <hr></hr>
                    <Foodtoppost number="2" topallname="Tasty Spicy Pizza" toppostallimage="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <hr></hr>
                    <Foodtoppost number="3" topallname="Spicy Rolls" toppostallimage="https://images.pexels.com/photos/9328497/pexels-photo-9328497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
                    <hr></hr>
                    <Foodtoppost number="4" topallname="Tasty Spicy Pizza" toppostallimage="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>

                    <FoodAdvertisement/>
                </div>
            </div>
        </>
    )
}