import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";

const Home: NextPage = () => {
  const constraintsRef = useRef(null);
  return (
    <motion.div ref={constraintsRef} id={styles.container}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        id={styles.calculatorContainer}
      >
        <div id={styles.displayContainer}></div>
        <div id={styles.buttonsContainer}>
          <div className={`${styles.button} ${styles.function}`}>AC</div>
          <div className={`${styles.button} ${styles.function}`}>+/-</div>
          <div className={`${styles.button} ${styles.function}`}>%</div>
          <div className={`${styles.button} ${styles.operator}`}>÷</div>
          <div className={`${styles.button} ${styles.operand}`}>7</div>
          <div className={`${styles.button} ${styles.operand}`}>8</div>
          <div className={`${styles.button} ${styles.operand}`}>9</div>
          <div className={`${styles.button} ${styles.operator}`}>×</div>
          <div className={`${styles.button} ${styles.operand}`}>4</div>
          <div className={`${styles.button} ${styles.operand}`}>5</div>
          <div className={`${styles.button} ${styles.operand}`}>6</div>
          <div className={`${styles.button} ${styles.operator}`}>-</div>
          <div className={`${styles.button} ${styles.operand}`}>1</div>
          <div className={`${styles.button} ${styles.operand}`}>2</div>
          <div className={`${styles.button} ${styles.operand}`}>3</div>
          <div className={`${styles.button} ${styles.operator}`}>+</div>
          <div className={`${styles.button} ${styles.zero}`}>0</div>
          <div className={styles.button}>.</div>
          <div className={`${styles.button} ${styles.equals}`}>=</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
