import React, { FunctionComponent } from "react";
import { AnimationPropsWithDefaults } from "../types";
import Animation from "../_base/animation";

import "./spin.css";

const spin: FunctionComponent<AnimationPropsWithDefaults> = ({
  children,
  ...props
}) => {
  return (
    <Animation {...props} animation="spin">
      {children}
    </Animation>
  );
};

export default spin;
