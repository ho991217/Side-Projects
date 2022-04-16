import React from "react";
import styles from "../styles/Keyboard.module.css";
import { currentWord } from "../states/currentWord";
import { useRecoilState } from "recoil";

function Keyboard() {
  const [curWord, setCurword] = useRecoilState(currentWord);

  const handleKeyClick = (e) => {
    if (curWord.length < 5) {
      setCurword((prev) => prev + e.currentTarget.innerHTML);
    }
  };

  const handleDelete = () => {
    if (curWord.length > 0) {
      setCurword((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div id={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.key} onClick={handleKeyClick}>
          q
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          w
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          e
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          r
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          t
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          y
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          u
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          i
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          o
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          p
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.halfSpacer}></div>
        <div className={styles.key} onClick={handleKeyClick}>
          a
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          s
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          d
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          f
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          g
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          h
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          j
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          k
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          l
        </div>
        <div className={styles.halfSpacer}></div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.key} ${styles.oneHalf}`}>ENTER</div>
        <div className={styles.key} onClick={handleKeyClick}>
          z
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          x
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          c
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          v
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          b
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          n
        </div>
        <div className={styles.key} onClick={handleKeyClick}>
          m
        </div>
        <div
          className={`${styles.key} ${styles.oneHalf}`}
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Keyboard;
