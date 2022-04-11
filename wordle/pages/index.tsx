import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import GetWords from "../components/GetWords";
import { useState } from "react";
import Whome from "./whome";

const Home: NextPage = () => {
  const [words, setWords] = useState<string[]>([]);

  // useEffect(
  //   () => async () => {
  //     const res = await GetWords;
  //   },
  //   []
  // );
  return (
    <div className={styles.container}>
      {/* <ul>{words && words.map((word) => <li>{word}</li>)}</ul> */}
      <GetWords />
    </div>
  );
};

export default Home;
