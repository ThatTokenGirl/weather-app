import React from "react";

import "./partly-cloudy.scss";
import Cloud from "../../weather-icons/cloud/cloud";
import Sun from "../../weather-icons/sun/sun";
import { IconProps } from "../../weather-icons/types";

import { Spin, SlideLeft } from "../../animations";

export default function (props: IconProps) {
  return (
    <div className="partly-cloudy">
      <div className="sun">
        <Spin duration={10000}>
          <Sun {...props}></Sun>
        </Spin>
      </div>
      <div className="cloud-container cloud-container-1">
        <SlideLeft duration={13000}>
          <div className="cloud">
            <Cloud {...props}></Cloud>
          </div>
        </SlideLeft>
      </div>
      <div className="cloud-container cloud-container-2">
        <SlideLeft duration={18000}>
          <div className="cloud">
            <Cloud {...props}></Cloud>
          </div>
        </SlideLeft>
      </div>
      <div className="cloud-container cloud-container-3">
        <SlideLeft duration={21000} delay={3000}>
          <div className="cloud">
            <Cloud {...props}></Cloud>
          </div>
        </SlideLeft>
      </div>
      <div className="cloud-container cloud-container-4">
        <SlideLeft duration={10000} delay={7000}>
          <div className="cloud">
            <Cloud {...props}></Cloud>
          </div>
        </SlideLeft>
      </div>
      <div className="cloud-container cloud-container-5">
        <SlideLeft duration={17500} delay={200}>
          <div className="cloud">
            <Cloud {...props}></Cloud>
          </div>
        </SlideLeft>
      </div>
    </div>
  );
}
