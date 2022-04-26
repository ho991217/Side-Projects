import { useState } from "react";
import { useEffect } from "react";
import GetWords from "../components/GetWords";
import { PulseLoader } from "react-spinners";
import Keyboard from "../components/Keyboard";
import { useRecoilState } from "recoil";
import { currentWord } from "../states/currentWord";
import Grid from "../components/Grid";
import styles from "../styles/ingame.module.css";

function ingame() {
  const [word, setWord] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [curWord, setCurWord] = useRecoilState(currentWord);

  useEffect(() => {
    try {
      GetWords().then((res) => {
        setWord(res?.data);
        setLoading(false);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div id={styles.wrapper}>
      {loading && <PulseLoader />}
      {curWord}
      <div id={styles.container}>
        <Grid />
        <Keyboard />
      </div>
    </div>
  );
}

export default ingame;
