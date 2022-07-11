import Menu from "./menu";
import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FavComponent from "../src/components/favComponent";
import styles from "../styles/favComponent.module.css";
import { app, database } from '../firebaseConfig'
import {
  collection,
  addDoc,
  getDoc,
  doc
} from 'firebase/firestore'
import { setFlagsFromString } from "v8";
export default function Favourites() {

  useEffect(() => {
    readData();
    result;
    console.log(result);
  }, [])
  const [favMovies, setfavMovies] = useState([]);
  const db = collection(database, 'Favorites');
  function readData() {
    const userDoc = doc(db, localStorage.getItem('ID') || "S");
    getDoc(userDoc).then((docc) => {
      if (docc.exists()) {
        // wconsole.log(favMovies);
        setfavMovies(Object.entries(docc.data()));
      }
      else console.log("ksm");
    })
  }
  function result()
  {
    const movies=favMovies.filter(movie=>movie[1]);
    console.log(movies);
    return movies.map((movie)=>
    <FavComponent nameRu={movie[0]} isfav={movie[1]} setfavMovies={setfavMovies} />
    )
  }
  return (
    <>
      <Menu />
      <div className={styles.body}>
        <h1>Favourite page</h1>
        <div>
          {result()}
        </div>
      </div>
    </>
  );
}
