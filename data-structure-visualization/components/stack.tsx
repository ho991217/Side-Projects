import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ReactElement } from "react";
import styles from "../styles/Stack.module.css";

type StackProps = {
  arr: Array<number>;
  size: number;
};

const Stack: React.FC<StackProps> = ({ arr, size }) => {
  const renderLists = () => {
    const result = [];
    for (let i = size - 1; i >= 0; i--) {
      result.push(
        <li
          key={size - i - 1}
          id={"cell-" + (size - i - 1)}
          className={styles.cell}
        >
          {arr[i] && arr[i]}
        </li>
      );
    }
    return result;
  };

  useEffect(() => {
    if (arr.length > 0) {
      console.log("Stack: ", arr);
    }
  }, [arr]);

  return (
    <div id={styles.wrapper}>
      <h1>Stack</h1>
      <ul id={styles.stackContainer}>{renderLists()}</ul>
    </div>
  );
};

export default Stack;
