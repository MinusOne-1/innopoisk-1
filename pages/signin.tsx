import React from "react";
import styles from "../styles/Registration.module.css";


export default function Signin(){
    return (
        <div>
            <div className = {styles.form}>
                <h1>Hello again!</h1>
                <p className = {styles.meta}>Email</p>
                <input type={"email"} alt={"email"}/>
                <p className = {styles.meta}>Password</p>
                <input type={"password"} alt={"password"}/>
                <button>Sign in</button>
                <p className={styles.question}>Don't have an account?</p>
                <a href={"hui"}>Sign up</a>
            </div>
        </div>
    );
}