import React from "react";
import {Modal} from "./Modal";
export const Card = (props) => {
    const books = props.bookData;
    console.log('bookData:', books);
    return (
        <>
            {
                books.map((book) => {
                    const volumeInfo = book.volumeInfo;
                    let thumbnail = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;
                    console.log(volumeInfo);
                    if (thumbnail !== undefined) {
                        return (
                            <>
                                <div key={book.id} className="card">
                                    <img src={thumbnail} alt="" />
                                    <div className="bottom">
                                        <h3 className="title">{volumeInfo.title}</h3>
                                        <p className="amount">{book.price}</p>
                                    </div>
                                </div>
                                <Modal />
                            </>
                        )
                    }


                })
            }
        </>
    )
} 