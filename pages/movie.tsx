import React from "react";
import styles from "../styles/Movie.module.css";

export default function Movie({
  nameRu,
  posterUrl,
  rating,
}: {
  nameRu: string;
  posterUrl: string;
  rating: string;
}) {
  return (
    <div className={styles.movie}>
      <img src={posterUrl} alt={nameRu} />
      <div className={styles.movie_info}>
        <h3>{nameRu}</h3>
        <div className={styles.meta}>
          <button><img src="../heart_nofill.png" alt="heart" /></button>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
