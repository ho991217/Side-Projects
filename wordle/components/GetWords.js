import axios from "axios";

async function GetWords() {
  return await axios.request({
    method: "GET",
    url: "https://random-words5.p.rapidapi.com/getRandom",
    params: { wordLength: "5" },
    headers: {
      "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
      "X-RapidAPI-Key": "399cd3d103msh8203aa1119a3342p17862ajsn81de5ecfcd99",
    },
  });
}

export default GetWords;
