import React from "react";
import Menu from "./menu";
import Signup from "./signup";
import Signin from "./signin";
import styles from "../styles/Registration.module.css";
export default function Registration(){
    return(
        <div className={styles.body}>
           <Signin/>
        </div>
    );
}