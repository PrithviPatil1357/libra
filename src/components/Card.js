import React from "react";

export const Card = ()=>{
    return(
        <div className="card">
            <img src={require('../images/hbp_book.jpg')} alt="" />
            <div className="bottom">
                <h3 className="title">Advanced Potions</h3>
                <p className="amount">&#8383;6930</p>
            </div>
        </div>
    )
}