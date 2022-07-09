import React from "react";
import Menu from "./menu";
import styles from "../styles/Settings.module.css";

export default function Settings() {
  return (
    <div>
      <Menu />
      <div className={styles.container}>
        <h1>Settings</h1>
        <div className={styles.registration_personalData}>
          <div className={styles.main}>
            <div className={styles.password}>
              <img src="../settings_icon.svg" alt="j" />
              <div className={styles.change}>
                <h2>Change the password</h2>
                <p>Enter the new password</p>
                <input type="password" alt="password" />
                <p>Enter the password again</p>
                <input type="password" alt="password" />
              </div>
            </div>

            <div className={styles.password}>
              <img src="../theme_icon.svg" alt="j" />
              <div className={styles.change}>
                <h2>Change Theme</h2>
                <div>
                  <label htmlFor="change-theme-checkbox">
                    Light theme
                    <input type="checkbox" id="change-theme-checkbox" checked />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.personalData}>
            <img src="../person_icon.svg" alt="j" />
          </div>
        </div>
      </div>
    </div>
  );
}
