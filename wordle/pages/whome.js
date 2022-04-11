import React from "react";
import { useEffect } from "react";
import GetWords from "../components/GetWords";

function Whome() {
  useEffect(
    () => async () => {
      await GetWords().then((res) => console.log(res));
    },
    []
  );
  return <div>whome</div>;
}

export default Whome;
