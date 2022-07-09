import React from "react";
import styles from "../styles/Registration.module.css";

export default function Signup() {
  return (
    <div>
      <div className={styles.form}>
        <h1>Join us!</h1>
        <p className={styles.meta}>Email</p>
        <input type="email" alt="email" />
        <p className={styles.meta}>Password</p>
        <input type="password" alt="password" />
        <button type="button">Sign up</button>
        <p className={styles.question}>Already have account?</p>
        <a href="hui">Sign in</a>
      </div>
    </div>
  );
}
