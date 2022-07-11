import React from "react";
import styles from "/styles/movieInfo.module.css";

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
            <div className={styles.container}>
                <img src={posterUrl} alt={nameRu} />
                <div className={styles.info}>
                    <h1>{nameRu}</h1>
                    <h2> About movie</h2>
                    <div className={styles.general}>
                        <div>
                            <h3>Year</h3>
                            <h4>{year}</h4>
                        </div>
                        <div>
                            <h3>ratingAgeLimits</h3>
                            <h4>{ratingAgeLimits}</h4>
                        </div>
                        <div>
                            <h3>Link</h3>
                            <a href={webUrl}>Link</a>
                        </div>

                        <div>
                            <h3>Description</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
