import React, { FunctionComponent } from "react";
import "./App.css";
import {
  PartlyCloudy,
  Sunny,
  HeavyRain,
  LightRain,
  HeaveSnow,
  LightSnow,
  Thunderstorm,
} from "./weather-stories";
import { IconProps } from "./weather-icons/types";

const stories: {
  name: string;
  component: FunctionComponent<IconProps>;
}[] = [
  {
    name: "Sunny",
    component: Sunny,
  },
  {
    name: "Partly Cloudy",
    component: PartlyCloudy,
  },
  {
    name: "Heavy Rain",
    component: HeavyRain,
  },
  {
    name: "Light Rain",
    component: LightRain,
  },
  {
    name: "Heavy Snow",
    component: HeaveSnow,
  },
  {
    name: "Light Snow",
    component: LightSnow,
  },
  {
    name: "Thunderstorm",
    component: Thunderstorm,
  },
];

function App() {
  return (
    <div id="main">
      {stories.map(({ name, component: Component }, index) => (
        <div key={index} className="icon">
          <Component strokeColor="white" fillColor="#2c3e50"></Component>
          {name}
        </div>
      ))}
    </div>
  );
}

export default App;
