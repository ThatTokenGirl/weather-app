import React, { FunctionComponent } from "react";
import { IconProps } from "../../weather-icons/types";
import { Cloud, Raindrop } from "../../weather-icons";
import { SlideDown } from "../../animations";
import styles from "./heavy-rain.module.scss";

const heavyRain: FunctionComponent<IconProps> = (props) => {
  const items = [];

  for (let i = 0; i < 5; i++) {
    const index = i + 1;
    items.push(
      <div
        key={index}
        className={`${styles["cloud-container"]} ${
          styles[`cloud-container-${index}`]
        }`}
      >
        <div className={styles.cloud}>
          <Cloud {...props}></Cloud>
        </div>

        <div className={styles["raindrop-container"]}>
          <div className={styles.raindrop}>
            <SlideDown duration={randomDuration()}>
              <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
            </SlideDown>
          </div>
          <div className={styles.raindrop}>
            <SlideDown duration={randomDuration()}>
              <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
            </SlideDown>
          </div>
          <div className={styles.raindrop}>
            <SlideDown duration={randomDuration()}>
              <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
            </SlideDown>
          </div>
          <div className={styles.raindrop}>
            <SlideDown duration={randomDuration()}>
              <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
            </SlideDown>
          </div>
          <div className={styles.raindrop}>
            <SlideDown duration={randomDuration()}>
              <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.container}>{items}</div>;
};

export default heavyRain;

function randomDuration() {
  return Math.floor((Math.random() * 0.5 + 0.5) * 1000);
}
