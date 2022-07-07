import React, {useEffect, useState} from "react";
import {GetServerSideProps} from "next";
import Info from './Info'

const API_INFO_BBY_ID = "https://kinopoiskapiunofficial.tech/api/v2.2/films/";
const API_Key = "af70d4de-1ee0-4425-a428-b726e4cbbe0e";

export default function Movie({nameRu, posterUrl, rating, filmId} : {nameRu:string, posterUrl:string, rating: string, filmId: number}) {
    let API = API_INFO_BBY_ID+ filmId;


    return (
        <div>
            <img src={posterUrl} alt = {nameRu}/>
           <a>{nameRu}, {rating},</a>
            {info.length > 0 && info.map((movie) => <Movie key={movie.filmId} {...movie}/>)}
        </div>
    )

}