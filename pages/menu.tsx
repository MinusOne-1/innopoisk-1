import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
/* import handleOnSubmit from "../pages/index"; */

export default function Menu() {
  return (
    <div>
      <header className={styles.head}>
        <ul className={styles.hr}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/favourites">Favorites</Link>
          </li>
        </ul>
        <img src="../InnoPoisk.svg" alt="InnoPoisk" />
        <div className={styles.right}>
          <Link className={styles.btn} href="/registration">
            <img src="../user.png" alt="" />
          </Link>
        </div>
      </header>
    </div>
  );
}
