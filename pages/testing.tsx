import React, { useEffect, useState } from "react";
import Head from 'next/head'
import { useRouter } from 'next/router';
import Link from 'next/link'
import Read from "../src/components/read"
import { getAuth, updatePassword } from "firebase/auth";

import { app, database } from '../firebaseConfig'
import {
    collection,
    addDoc,
    getDoc,
    doc,
    DocumentReference
} from 'firebase/firestore'
export default function test() {
    const [favMovies,setfavMovies]=useState(null);
    const db = collection(database,'Favorites');
    async function readData(){
            const userDoc = doc(db, sessionStorage.getItem('ID')||"S");    
            await getDoc(userDoc).then((docc) => {
                if (docc.exists()) {
                    //  console.log(favMovies);
                    //   console.log(docc.data()['a']);
                     setfavMovies(docc.data());
                    // console.log(favMovies);
                }
            })
    }
    async function read(){
    }
    useEffect(() => {
        const auth = getAuth();
        console.log (auth.currentUser);
      }, [])
    return (
        <div>
        <button onClick={()=>read()}></button>
        {/* <button onClick={()=>readData()}></button> */}
        </div>
    );
}