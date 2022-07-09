import React from "react";
import Menu from "./menu";
import FavComponent from "./favComponent";
import styles from "../styles/favComponent.module.css";

export default function Favourites() {
  return (
      <>
        <Menu/>
          <div className={styles.body}>
              <h1>Favourite page</h1>
        <FavComponent/>
          </div>
      </>
  );
}
