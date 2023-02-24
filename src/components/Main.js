import React from "react";  
import {Card} from "./Card";
export const Main = ()=>{
    return (
        <>
        <div className="header">
            <div className="row1">
                <h1>A room without books is like<br/> a body without a soul.</h1>
            </div>
            <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder="Enter name"/>
                    <button><i className="fas fa-search"></i></button>
                </div>
             </div>
            <img src={require('../images/hp_lib.jpg')} alt="something" />
        </div>
        <div className="container">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </>

    )
}