import React from "react";
import { useState } from "react";
import styles from "../styles/Grid.module.css";

function Grid() {
  const [words, setWords] = useState([[], [], [], [], [], []]);

  return (
    <div id={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
      <div className={styles.row}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
}

export default Grid;
