import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import Menu from "../../src/components/menu";

import { API_INFO_BBY_ID, API_KEY } from "../../API/dataAPI";
import Info from "./Info";
import { IsSignedInContext } from "../_app";
import { userAgent } from "next/server";
import { app, database } from "../../firebaseConfig";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
type Information = {
  nameRu: string;
  description: string;
  slogan: string;
};

export default function ContactId() {
  const { isSignedIn, setIsSignedIn } = useContext(IsSignedInContext)!;
  const db = collection(database, "Favorites");
  const router = useRouter();

  const [film, setInfo] = useState<Information>();
  const [fav, setFav] = useState<boolean>(false);
  useEffect(() => {
    const { filmId } = router.query;
    if (filmId) {
      console.log(router.query, filmId);

      console.log("eeeee");
      fetch(API_INFO_BBY_ID + filmId, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data === "") {
            return;
          }
          setInfo(data);
          // console.log(data);
        })
        .catch(() => {});
    }
  }, [router]);

  return (
    <div>
      <Menu />
      <div>
        <Info {...film} />
      </div>
    </div>
  );
}
