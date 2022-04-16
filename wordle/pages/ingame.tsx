import { useState } from "react";
import { useEffect } from "react";
import GetWords from "../components/GetWords";
import { PulseLoader } from "react-spinners";
import Keyboard from "../components/Keyboard";
import { useRecoilState } from "recoil";
import { currentWord } from "../states/currentWord";
import Grid from "../components/Grid";

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
    <div>
      {loading && <PulseLoader />}
      {curWord}
      <Grid />
      <Keyboard />
    </div>
  );
}

export default ingame;
