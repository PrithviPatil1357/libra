import React from "react";
export const Modal = ()=>{
    return (
        <>
            <div className="overlay">
                <div className="inner-overlay">
                    <button className="close"><i class="fa-sharp fa-solid fa-rectangle-xmark"></i></button>
                    <div className="inner-box">
                        <img src="./images/book.jpg" alt="" />
                        <div className="info">
                            <h1>some text</h1>
                            <h3>some more</h3>
                            <h4>some more..  <span>2023-26-02</span></h4><br />
                            <a href="#"><button>More</button></a> 

                        </div>
                    </div>
                    <h4 className="description">some description</h4>
                </div>
            </div>
        </>
    )
}