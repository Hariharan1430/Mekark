'use client';
import React from "react";
import styles from "./subcribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.subscribecontainer}>
      <h2 className={styles.subscribetitle}>Subscribe Our Latest Updates</h2>
      <div className={styles.inputContainer}>
        <input
          type="email"
          placeholder="Your Email Address"
          className={styles.input}
        />
        <button className={styles.subscribebutton}>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;