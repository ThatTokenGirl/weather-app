import React, { FunctionComponent } from "react";
import { IconProps } from "../../weather-icons/types";
import { Cloud, Snowflake } from "../../weather-icons";
import { SlideDown } from "../../animations";
import styles from "./heavy-snow.module.scss";

const heavySnow: FunctionComponent<IconProps> = (props) => {
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

        <div className={styles["snow-container"]}>
          <div className={styles.snowflake}>
            <SlideDown duration={randomDuration()}>
              <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
            </SlideDown>
          </div>
          <div className={styles.snowflake}>
            <SlideDown duration={randomDuration()}>
              <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
            </SlideDown>
          </div>
          <div className={styles.snowflake}>
            <SlideDown duration={randomDuration()}>
              <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
            </SlideDown>
          </div>
          <div className={styles.snowflake}>
            <SlideDown duration={randomDuration()}>
              <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
            </SlideDown>
          </div>
          <div className={styles.snowflake}>
            <SlideDown duration={randomDuration()}>
              <Snowflake {...props} fillColor={props.strokeColor}></Snowflake>
            </SlideDown>
          </div>
        </div>
      </div>
    );
  }

  return <div className={styles.container}>{items}</div>;
};

export default heavySnow;

function randomDuration() {
  return Math.floor((Math.random() * 0.5 + 0.5) * 1000);
}
