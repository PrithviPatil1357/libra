import React, {useState} from "react";
import {Modal} from "./Modal";
export const Card = (props) => {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return (
        <>
            {
                props.bookData.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks?.smallThumbnail ?? item.volumeInfo.imageLinks?.thumbnail ?? "./images/image_not_available.png";

                    let amount = (item.saleInfo.saleability === "FOR_SALE" && item.saleInfo.retailPrice?.amount) ?? "Not For Sale";
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div>
                              <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    
                })
            }

        </>
    )
}