import React from "react";

export default function Movie({nameRu, posterUrl, rating} : {nameRu:string, posterUrl:string, rating: string}) {
    return (
        <div>
            <img src={posterUrl} alt = {nameRu}/>


        </div>
    )

}