import { WithOptional } from "../utilities";

export type AnimationProps = {
  duration: number;
  delay: number;
  timing: string;
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
  iterationCount?: number | "infinite";
};

export type AnimationPropsWithDefaults = WithOptional<
  AnimationProps,
  "delay" | "timing" | "iterationCount" | "direction"
>;
