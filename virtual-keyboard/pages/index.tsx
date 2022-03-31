import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const [shift, setShift] = useState(false);
  const [caps, setCaps] = useState(false);
  const [typing, setTyping] = useState(false);

  const onKeyboardTyped = (event: React.MouseEvent<HTMLDivElement>) => {
    const text = event.currentTarget.innerText;
    setText((prev) => prev + text);
    if (!caps) {
      setShift(false);
    }
  };

  const onEnter = () => {
    setText("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write Something..."
        value={text}
        onClick={() => setTyping(true)}
        onInput={(e) => {
          e.preventDefault();
        }}
      />
      {typing && (
        <div className={styles.keyboardWrapper}>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "`" : "~"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "!" : "1"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "@" : "2"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "#" : "3"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "$" : "4"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "%" : "5"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "^" : "6"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "&" : "7"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "*" : "8"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "(" : "9"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? ")" : "0"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "_" : "-"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "+" : "="}
          </div>
          <div
            onClick={() => setText(text.slice(0, -1))}
            className={`${styles.key} ${styles.backspace}`}
          >
            backspace
          </div>
          <div
            onClick={onKeyboardTyped}
            className={`${styles.key} ${styles.tab}`}
          >
            tab
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "Q" : "q"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "W" : "w"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "E" : "e"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "R" : "r"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "T" : "t"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "Y" : "y"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "U" : "u"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "I" : "i"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "O" : "o"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "P" : "p"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "{" : "["}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "}" : "]"}
          </div>
          <div
            onClick={onKeyboardTyped}
            className={`${styles.key} ${styles.backslash}`}
          >
            {shift ? "|" : `\\`}
          </div>
          <div
            onClick={() => {
              setCaps(!caps);
              setShift(!shift);
            }}
            className={`${styles.key} ${styles.capslock}`}
          >
            caps lock
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "A" : "a"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "S" : "s"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "D" : "d"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "F" : "f"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "G" : "g"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "H" : "h"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "J" : "j"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "K" : "k"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "L" : "l"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? ":" : ";"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? `\"` : `\'`}
          </div>
          <div onClick={onEnter} className={`${styles.key} ${styles.enter}`}>
            enter
          </div>
          <div
            onClick={() => setShift(!shift)}
            className={`${styles.key} ${styles.lshift}`}
          >
            shift
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "Z" : "z"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "X" : "x"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "C" : "c"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "V" : "v"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "B" : "b"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "N" : "n"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "M" : "m"}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "<" : ","}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? ">" : "."}
          </div>
          <div onClick={onKeyboardTyped} className={styles.key}>
            {shift ? "?" : "/"}
          </div>
          <div
            onClick={() => setShift(!shift)}
            className={`${styles.key} ${styles.rshift}`}
          >
            shift
          </div>
          <div className={styles.lempty}></div>
          <div
            onClick={onKeyboardTyped}
            className={`${styles.key} ${styles.spacebar}`}
          >
            &nbsp;
          </div>
          <div className={styles.rempty}></div>
          <div
            className={`${styles.key} ${styles.escape}`}
            onClick={() => setTyping(false)}
          >
            close
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
