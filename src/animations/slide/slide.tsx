import { FunctionComponent } from "react";
import { AnimationPropsWithDefaults } from "../types";

import React from "react";
import "./slide.css";

import Animation from "../_base/animation";

const slideLeft: FunctionComponent<AnimationPropsWithDefaults> = ({
  children,
  ...props
}) => {
  return (
    <Animation {...props} animation="slideLeft">
      {children}
    </Animation>
  );
};

export const SlideLeft = slideLeft;

const slideRight: FunctionComponent<AnimationPropsWithDefaults> = ({
  children,
  ...props
}) => {
  return (
    <Animation {...props} animation="slideRight">
      {children}
    </Animation>
  );
};

export const SlideRight = slideRight;

const slideDown: FunctionComponent<AnimationPropsWithDefaults> = ({
  children,
  ...props
}) => {
  return (
    <Animation {...props} animation="slideDown">
      {children}
    </Animation>
  );
};

export const SlideDown = slideDown;

const slideUp: FunctionComponent<AnimationPropsWithDefaults> = ({
  children,
  ...props
}) => {
  return (
    <Animation {...props} animation="slideUp">
      {children}
    </Animation>
  );
};

export const SlideUp = slideUp;
