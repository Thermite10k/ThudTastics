import { useEffect, useState } from "react";

import ReactSpeedometer from "react-d3-speedometer";

function RPM(props) {
  const RPM = props.RPM;
  const height = props.height;
  const width = props.width;

  return (
    <div className="danger">
      <ReactSpeedometer
        value={RPM}
        currentValueText="RPM"
        height={height}
        width={width}
        minValue={0}
        maxValue={10000}
        segments={height && height < 150 ? 3 : 10}
        startColor={"white"}
        endColor={"red"}
        textColor={"white"}
      />
      {RPM} RPM
      {RPM > 8000 && <div className="alert"></div>}
    </div>
  );
}

export default RPM;
