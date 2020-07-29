import React, { FunctionComponent } from "react";

import styles from "./animation.module.scss";
import { AnimationProps, AnimationPropsWithDefaults } from "../types";
import { useDefaults } from "../../utilities";

const _animation: FunctionComponent<AnimationProps & { animation: string }> = ({
  children,
  ...props
}) => {
  return (
    <div
      className={styles.animationContainer}
      style={{
        animation: props.animation,
        animationDelay: `${props.delay}ms`,
        animationDirection: props.direction || "normal",
        animationIterationCount:
          typeof props.iterationCount === "number"
            ? props.iterationCount
            : "infinite",
        animationDuration: `${props.duration}ms`,
        animationTimingFunction: props.timing,
      }}
    >
      {children}
    </div>
  );
};

export default useDefaults(_animation, {
  delay: 0,
  timing: "linear",
  iterationCount: "infinite",
  direction: "normal",
}) as FunctionComponent<AnimationPropsWithDefaults & { animation: string }>;
