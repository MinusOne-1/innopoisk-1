import React from "react";
import styles from "../styles/favComponent.module.css";

export default function FavComponent(){
    return (
        <div className={styles.main}>
            <p>Name of the film</p>
            <button type="button" className={styles.btn}><img src="../heart.png" alt="heart" /></button>
        </div>
    );
}