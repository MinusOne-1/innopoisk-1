import React from "react";
import Link from "next/link";
import styles from "../styles/Movie.module.css";

export default function Movie({
  nameRu,
  filmId,
  posterUrl,
  rating,
}: {
  nameRu: string;
  filmId: number;
  posterUrl: string;
  rating: string;
}) {
    function concatenation():string {
        console.log("hui");
        return `/movies/${ filmId}`;
    }
  return (
    <div className={styles.movie}>

      <img src={posterUrl} alt={nameRu} />
      <div className={styles.movie_info}>
    <Link href={concatenation()} key = {filmId}><h3>{nameRu}</h3></Link>
        <div className={styles.meta}>
          <button type="button"><img src="../heart_nofill.png" alt="heart" /></button>
          <span>{rating}</span>
        </div>
      </div>
    </div>
  );
}
