import React, { FunctionComponent } from "react";

import HeavyRain from "../heavy-rain/heavy-rain";
import { LightningBolt, IconProps } from "../../weather-icons";

import styles from "./thunderstorm.module.scss";

const thunderstorm: FunctionComponent<IconProps> = (props) => {
  return (
    <div className={styles.container}>
      <HeavyRain {...props}></HeavyRain>
      <div className={styles.thunderbolt1}>
        <LightningBolt {...props} fillColor={props.strokeColor}></LightningBolt>
      </div>

      <div className={styles.thunderbolt2}>
        <LightningBolt {...props} fillColor={props.strokeColor}></LightningBolt>
      </div>

      <div className={styles.thunderbolt3}>
        <LightningBolt {...props} fillColor={props.strokeColor}></LightningBolt>
      </div>
    </div>
  );
};

export default thunderstorm;
