import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function GetWords() {
  const [words, setWords] = useState("");
  const fetch = async () => {
    await axios
      .request({
        method: "GET",
        url: "https://wordsapiv1.p.rapidapi.com/words/",
        params: { letters: 5, limit: 1000 },
        headers: {
          "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          "X-RapidAPI-Key":
            "399cd3d103msh8203aa1119a3342p17862ajsn81de5ecfcd99",
        },
      })
      .then((res) => setWords(res.data.results.data));
  };

  useEffect(() => {
    fetch();
  }, []);

  return <ul>{words && words.map((word) => <li key={word}>{word}</li>)}</ul>;
}

export default GetWords;
