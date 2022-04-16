import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import GetWords from "../components/GetWords";
import { useState } from "react";

const Home: NextPage = () => {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    try {
      GetWords().then((res) => setWord(res?.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={styles.container}>
      <ul>{word && word}</ul>
    </div>
  );
};

export default Home;
