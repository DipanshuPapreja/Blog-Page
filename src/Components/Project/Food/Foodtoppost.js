import React from "react";
import Styles from './style.module.css';
import image from '../mountain.jpg';

export default function Foodtoppost(props){
    return(
        <>
            <div className={Styles.topcontainer}>
                <div className={Styles.topleft}>
                <img src={props.toppostallimage}/>
                </div>
                <div className={Styles.mid}>
                    <h4> {props.topallname} </h4>
                    <p> <span> Travel </span> / August 21, 2017 </p>
                </div>
                <div className={Styles.right}>
                    {props.number}
                </div>
            </div>
        </>
    )
}