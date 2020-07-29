import React, { FunctionComponent } from "react";

import { Sun, Cloud, Raindrop, IconProps } from "../../weather-icons";
import { Spin, SlideDown } from "../../animations";

import styles from "./light-rain.module.scss";

const lightRain: FunctionComponent<IconProps> = (props) => {
  let raindrops = [];

  for (let i = 0; i < 10; i++) {
    raindrops.push(
      <div key={i + 1} className={styles.raindrop}>
        <SlideDown
          duration={(Math.floor(Math.random() * 25) + 10) * 100}
          delay={Math.floor(Math.random() * 30) * 100}
        >
          <Raindrop {...props} fillColor={props.strokeColor}></Raindrop>
        </SlideDown>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.raindropContainer}>{raindrops}</div>
      <div className={styles.sunContainer}>
        <Spin duration={10000}>
          <Sun {...props}></Sun>
        </Spin>
      </div>

      <div className={styles.cloudContainer1}>
        <Cloud {...props}></Cloud>
      </div>
      <div className={styles.cloudContainer2}>
        <Cloud {...props}></Cloud>
      </div>
      <div className={styles.cloudContainer3}>
        <Cloud {...props}></Cloud>
      </div>
    </div>
  );
};

export default lightRain;
