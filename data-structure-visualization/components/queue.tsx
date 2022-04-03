import React from "react";
import { useEffect } from "react";
import styles from "../styles/Queue.module.css";

type QueueProps = {
  arr: Array<number>;
  size: number;
};

const Queue: React.FC<QueueProps> = ({ arr, size }) => {
  const renderLists = () => {
    const result = [];
    for (let i = 0; i < size; i++) {
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
      console.log("Queue: ", arr);
    }
  }, [arr]);

  return (
    <div id={styles.wrapper}>
      <h1>Queue</h1>
      <ul id={styles.queueContainer}> {renderLists()}</ul>
    </div>
  );
};

export default Queue;
