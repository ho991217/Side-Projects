import { useState } from "react";
import styles from "../styles/Carousel.module.css";

export interface DataArrayProps {
  id: number;
  text: string;
  imgUrl: string;
}

const Carousel = (data: DataArrayProps[]): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const setNextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev < 3) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const setPrevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return 3;
      }
    });
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <div
          style={{ transform: `translateX(${(0 - currentSlide) * 100}%)` }}
          id={styles.first}
          className={`${styles.slide}`}
        >
          1
        </div>
        <div
          style={{ transform: `translateX(${(1 - currentSlide) * 100}%)` }}
          id={styles.second}
          className={`${styles.slide}`}
        >
          2
        </div>
        <div
          style={{ transform: `translateX(${(2 - currentSlide) * 100}%)` }}
          id={styles.third}
          className={`${styles.slide}`}
        >
          3
        </div>
        <div
          style={{ transform: `translateX(${(3 - currentSlide) * 100}%)` }}
          id={styles.forth}
          className={`${styles.slide}`}
        >
          4
        </div>
      </div>
      <input type="button" onClick={setPrevSlide} value="<=" />
      <input type="button" onClick={setNextSlide} value="=>" />
    </div>
  );
};

export default Carousel;
