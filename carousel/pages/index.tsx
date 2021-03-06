import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Carousel, { DataArrayProps } from "../components/carousel";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const dummy: DataArrayProps[] = [
    {
      id: 1,
      text: "firstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirstfirst",
      imgUrl: "",
    },
    {
      id: 2,
      text: "secondsecondsecondsecondsecondsecondsecondsecondsecondsecondsecondsecondsecondsecond",
      imgUrl: "",
    },
    {
      id: 3,
      text: "thirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthirdthird",
      imgUrl: "",
    },
    {
      id: 4,
      text: "fourthfourthfourthfourthfourthfourthfourthfourthfourthfourthfourthfourthfourth",
      imgUrl: "",
    },
  ];

  return (
    <div>
      <Head>
        <title>캐러셀 구현</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.wrapper}>
        <Carousel data={dummy} />
      </div>
    </div>
  );
};

export default Home;
