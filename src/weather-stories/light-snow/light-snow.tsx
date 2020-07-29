import React, { FunctionComponent } from "react";

import { Sun, Cloud, Snowflake, IconProps } from "../../weather-icons";
import { Spin, SlideDown } from "../../animations";

import styles from "./light-snow.module.scss";

const lightRain: FunctionComponent<IconProps> = (props) => {
  let snowflakes = [];

  for (let i = 0; i < 10; i++) {
    snowflakes.push(
      <div key={i + 1} className={styles.raindrop}>
        <SlideDown
          duration={(Math.floor(Math.random() * 25) + 10) * 100}
          delay={Math.floor(Math.random() * 30) * 100}
        >
          <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
        </SlideDown>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.snowContainer}>{snowflakes}</div>
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
