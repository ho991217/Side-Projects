import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();

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
    <div>
      <div>
        <input
          type="number"
          placeholder="height (cm)"
          value={height}
          onChange={(e) => setHeight(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="weight (kg)"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />
        {calculateBmi(height, weight).toFixed(2)}
      </div>
    </div>
  );
};

export default Home;
