import React from "react";

export default function Info({
                                 nameRu,
                                 posterUrl,
                                 rating,
                                 description,
    year, webUrl, ratingAgeLimits, slogan,filmLength
                             }: {
    nameRu: string;
    posterUrl: string;
    rating: string;
    description: string;
    year: number;
    webUrl: URL;
    ratingAgeLimits: string;
    slogan: string;
    filmLength: number
    // genres: genre[] = [];

}) {
    return (<>
        <div>
            <img src={posterUrl} alt={nameRu}/>
            {nameRu},
            {rating},
            {description},
            {year},
            {webUrl}, {ratingAgeLimits}, {slogan},
            <a>film length :{filmLength} min </a>
        </div>
        </>
    );
}
