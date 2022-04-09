import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

let stack: string[] = [];

const Home: NextPage = () => {
  const constraintsRef = useRef(null);
  const [currentNumber, setCurrentNumber] = useState<number>(0);
  const [toggleFloat, setToggleFloat] = useState(false);

  const Calculate = (event: any) => {
    const classes = event.target.classList.value;
    const peek = stack[stack.length - 1];

    if (classes.indexOf("operand") >= 0) {
      if (event.target.id === "." && !toggleFloat) {
        setCurrentNumber((prev) => parseFloat(prev.toFixed(1) + ".0"));
        setToggleFloat(true);
      } else if (event.target.id === "." && toggleFloat) {
        // bypass
      } else {
        if (currentNumber === 0 && event.target.id === "0") {
          // bypass
        } else if (!toggleFloat) {
          setCurrentNumber((prev) => Number(prev.toString() + event.target.id));
        } else if (toggleFloat) {
          console.log("hi");
          setCurrentNumber((prev) =>
            parseFloat(prev.toString() + "." + event.target.id)
          );
        }
      }
    } else if (classes.indexOf("operator") >= 0) {
      if (
        peek === "+" ||
        peek == "-" ||
        peek == "/" ||
        peek == "*" ||
        peek === undefined
      ) {
        console.log(stack);
      }
    } else if (classes.indexOf("function") >= 0) {
      console.log("function");
    } else if (classes.indexOf("equals") >= 0) {
      //
    }
    console.log(stack);
  };

  return (
    <motion.div ref={constraintsRef} id={styles.container}>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        id={styles.calculatorContainer}
      >
        <div id={styles.displayContainer}>{currentNumber}</div>
        <div id={styles.buttonsContainer}>
          <div
            onClick={(e) => Calculate(e)}
            id="clear"
            className={`${styles.button} ${styles.function}`}
          >
            {stack === [] ? "AC" : "C"}
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="+/-"
            className={`${styles.button} ${styles.function}`}
          >
            +/-
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="%"
            className={`${styles.button} ${styles.function}`}
          >
            %
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="/"
            className={`${styles.button} ${styles.operator}`}
          >
            ÷
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="7"
            className={`${styles.button} ${styles.operand}`}
          >
            7
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="8"
            className={`${styles.button} ${styles.operand}`}
          >
            8
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="9"
            className={`${styles.button} ${styles.operand}`}
          >
            9
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="*"
            className={`${styles.button} ${styles.operator}`}
          >
            ×
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="4"
            className={`${styles.button} ${styles.operand}`}
          >
            4
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="5"
            className={`${styles.button} ${styles.operand}`}
          >
            5
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="6"
            className={`${styles.button} ${styles.operand}`}
          >
            6
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="-"
            className={`${styles.button} ${styles.operator}`}
          >
            -
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="1"
            className={`${styles.button} ${styles.operand}`}
          >
            1
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="2"
            className={`${styles.button} ${styles.operand}`}
          >
            2
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="3"
            className={`${styles.button} ${styles.operand}`}
          >
            3
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="+"
            className={`${styles.button} ${styles.operator}`}
          >
            +
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="0"
            className={`${styles.button} ${styles.operand} ${styles.zero}`}
          >
            0
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="."
            className={`${styles.button} ${styles.operand}`}
          >
            .
          </div>
          <div
            onClick={(e) => Calculate(e)}
            id="="
            className={`${styles.button} ${styles.equals}`}
          >
            =
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
