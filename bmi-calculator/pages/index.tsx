import type { NextPage } from "next";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import indicator from "../public/indicator.svg";
import Image from "next/image";

const Home: NextPage = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [bmi, setBmi] = useState<number>();

  function calculateBmi(
    height: number | undefined,
    weight: number | undefined
  ): number {
    if (height && weight) {
      return weight / (height / 100) ** 2;
    }
    return 0;
  }

  function define(bmi: number): string {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (bmi < 25) {
      return "Normal";
    } else if (bmi < 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }

  useEffect(() => {
    if (height != "" && weight != "") {
      setBmi(calculateBmi(Number(height), Number(weight)));
    }
  }, [height, weight, bmi]);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <div>
          <span className={styles.Tag}>height</span>
          <input
            className={`${styles.Input} ${styles.InputHeight}`}
            type="number"
            placeholder="height (cm)"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          />
        </div>
        <div>
          <span className={styles.Tag}>weight</span>
          <input
            className={`${styles.Input} ${styles.InputWeight}`}
            type="number"
            placeholder="weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div id={styles.ResultBarContainer}>
          <div id={styles.ResultBar}>
            <div className={`${styles.UnderWeight} ${styles.InnerBar}`}>
              저체중
            </div>
            <div className={`${styles.Normal} ${styles.InnerBar}`}>정상</div>
            <div className={`${styles.OverWeight} ${styles.InnerBar}`}>
              과체중
            </div>
            <div className={`${styles.Obese} ${styles.InnerBar}`}>비만</div>
          </div>
          <div id={styles.ResultIndicator}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              id={styles.Indicator}
              style={{
                left: bmi
                  ? `${
                      bmi < 13.5
                        ? "0px"
                        : bmi < 35
                        ? `${((bmi - 13.5) / (35 - 13.5)) * 480}px`
                        : "480px"
                    }`
                  : "0px",
              }}
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
