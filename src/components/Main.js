import React, { useState } from "react";
import { Card } from "./Card";
import axios from "axios";
export const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setBookData] = useState([]);
    const searchBook = (e) => {
        if (e.key === 'Enter') {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBh4E1SfTH5iykd0VwcPrBHYK05a9iF9Ig`).then(res => {
                console.log(setBookData(res.data.items));
            }).catch(e => {
                console.log(e);
            })
        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter name" value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook} />
                        <button ><i className="fas fa-search"></i></button>
                    </div>


                </div>
                <img src={require('../images/hp_lib.jpg')} alt="something" />
            </div>
            <div className="container">
                {
                    <Card bookData={bookData} />
                }
            </div>
        </>

    )
}