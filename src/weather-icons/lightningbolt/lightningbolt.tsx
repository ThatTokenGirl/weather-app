import React from "react";
import { IconProps } from "../types";
import SvgFactory from "../svgfactory";

export default function (props: IconProps) {
  return (
    <SvgFactory {...props} width={512} height={640}>
      <path
        d="
                M 298.666666    0
                L 0             266.66666
                L 256           426.66666
                L 213.333333    640
                L 512           373.33333
                L 256           213.33333
                Z
            "
      ></path>
    </SvgFactory>
  );
}
