import React from "react";
export const Modal = (props)=>{
    if(!props.show)
    {
        return null;
    }
    let thumbnail=props.item.volumeInfo.imageLinks && props.item.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={props.onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{props.item.volumeInfo.title}</h1>
                            <h3>{props.item.volumeInfo.authors}</h3>
                            <h4>{props.item.volumeInfo.publisher}<span>{props.item.volumeInfo.publishedDate}</span></h4><br/>
                            <a href={props.item.volumeInfo.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{props.item.volumeInfo.description}</h4>
                </div>
            </div>
        </>
    )
}