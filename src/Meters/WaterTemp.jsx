import { useEffect, useState } from "react";

import ReactSpeedometer from "react-d3-speedometer";

function WaterTemp(props) {
  const temp = props.temp;
  const height = props.height;
  const width = props.width;

  return (
    <div className="danger">
      <ReactSpeedometer
        value={temp}
        currentValueText="Water Temp"
        height={height}
        width={width}
        minValue={70}
        maxValue={120}
        customSegmentStops={[70, 90, 100, 110, 120]}
        segmentColors={["white", "green", "yellow", "red"]}
        textColor={"white"}
      />
      {temp} C {temp > 110 && <div className="alert"></div>}
    </div>
  );
}

export default WaterTemp;
