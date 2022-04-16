import React from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div id={styles.wrapper}>
      <div id={styles.enterContainer}>
        <div id={styles.enterBox}>
          <h1 id={styles.title}>Welcome to Hordle!</h1>
          <button id={styles.startBtn}>
            <Link href="/ingame">Start Game!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
