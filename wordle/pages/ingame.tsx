import { useState } from "react";
import { useEffect } from "react";
import GetWords from "../components/GetWords";

function ingame() {
  const [word, setWord] = useState<string>("");

  useEffect(() => {
    try {
      GetWords().then((res) => setWord(res?.data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>ingame</div>;
}

export default ingame;
