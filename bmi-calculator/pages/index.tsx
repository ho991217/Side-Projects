import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [height, setHeight] = useState<number | undefined>();
  const [weight, setWeight] = useState<number | undefined>();

  function calculateBmi(
    height: number | undefined,
    weight: number | undefined
  ): number {
    if (height && weight) {
      return weight / (height / 100) ** 2;
    }
    return 0;
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <input
          className={`${styles.Input} ${styles.InputHeight}`}
          type="number"
          placeholder="height (cm)"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          className={`${styles.Input} ${styles.InputWeight}`}
          type="number"
          placeholder="weight (kg)"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        {height && weight && calculateBmi(height, weight).toFixed(2)}
      </div>
    </div>
  );
};

export default Home;
