import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Stack from "../components/stack";
import { useState } from "react";
import Queue from "../components/queue";

const Home: NextPage = () => {
  const [text, setText] = useState<string>("");
  const [pushValue, setPushValue] = useState<string>("");
  const [size, setSize] = useState<number | undefined>();
  const [stack, setStack] = useState<Array<number>>([]);
  const [queue, setQueue] = useState<Array<number>>([]);

  const handleSizeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSize(Number(text));
    setText("");
  };

  const handlePushSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(Number(pushValue));
    setPushValue("");
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert("STACK UNDERFLOW!");
    } else {
      setStack(stack.splice(0, stack.length - 1));
    }

    if (queue.length === 0) {
      alert("QUEUE UNDERFLOW!");
    } else {
      setQueue(queue.splice(1, queue.length - 1));
    }
  };

  const push = (value: number) => {
    if (size === stack.length) {
      alert("STACK OVERFLOW!");
    } else {
      setStack((prev) => [...prev, value]);
    }

    if (size === queue.length) {
      alert("QUEUE OVERFLOW!");
    } else {
      setQueue((prev) => [...prev, value]);
    }
  };
  return (
    <div id={styles.wrapper}>
      <div id={styles.controlsContainer}>
        <div>
          {!size ? (
            <form id={styles.sizeForm} onSubmit={handleSizeSubmit}>
              <input
                id={styles.sizeInput}
                className={styles.Input}
                type="number"
                placeholder="자료구조의 크기를 입력하십시오... (1 ~ 6)"
                required
                min={1}
                max={6}
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setText(e.target.value)
                }
              />
              <input
                id={styles.sizeSubmit}
                className={styles.Submit}
                type="submit"
                value="확인"
              />
            </form>
          ) : (
            <div>
              <form onSubmit={handlePushSubmit}>
                <input
                  id={styles.pushInput}
                  className={styles.Input}
                  type="number"
                  placeholder="push 할 값을 입력하세요."
                  required
                  value={pushValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPushValue(e.target.value)
                  }
                />
                <input
                  id={styles.pushSubmit}
                  className={styles.Submit}
                  type="submit"
                  value="PUSH"
                />
              </form>
              <button id={styles.popBtn} onClick={handlePop}>
                POP
              </button>
            </div>
          )}
        </div>
      </div>
      {size && (
        <div id={styles.visualDiv}>
          <Stack arr={stack} size={size} />
          <Queue arr={queue} size={size} />
        </div>
      )}
    </div>
  );
};

export default Home;
