import { useEffect, useState } from "react";

import ReactSpeedometer from "react-d3-speedometer";

function Speed(props) {
  const speed = props.speed;
  const height = props.height;
  const width = props.width;

  return (
    <div>
      <ReactSpeedometer
        value={speed}
        currentValueText="Speed/ IAS"
        height={height}
        width={width}
        maxSegmentLabels={5}
        segments={5555}
        minValue={0}
        maxValue={1500}
        startColor={"white"}
        endColor={"red"}
        textColor={"white"}
      />
      {speed} Km/H
      {speed > 1000 && <div className="alert"></div>}
    </div>
  );
}

export default Speed;
