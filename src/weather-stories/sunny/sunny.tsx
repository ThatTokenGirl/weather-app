import { FunctionComponent } from "react";
import { Spin } from "../../animations";
import React from "react";
import { Sun } from "../../weather-icons";
import { IconProps } from "../../weather-icons/types";

const sunny: FunctionComponent<IconProps> = (props: IconProps) => {
  return (
    <Spin duration={10000}>
      <Sun {...props}></Sun>
    </Spin>
  );
};

export default sunny;
