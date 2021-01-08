/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';

const Card = (props) => {
    const data = props.cardInfo;
    
    return (
        <div className="wrapper" >
            <div className={data.class} onClick={props.onClick}>
                <div className="card-front"></div> 
                <div className="card-back">
                    <img src={data.imgSrc} alt="loading"></img> 
                </div>
            </div>
        </div>
    );
}
 
export default Card;
