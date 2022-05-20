import { useEffect, useState } from "react";

import ReactSpeedometer from "react-d3-speedometer";

function Mach(props) {
  const machNumber = props.machNumber;
  const height = props.height;
  const width = props.width;

  return (
    <div className="danger">
      <ReactSpeedometer
        value={machNumber}
        currentValueText="Mach"
        height={height}
        width={width}
        minValue={0}
        maxValue={2.5}
        segments={300}
        customSegmentStops={[0, 0.9, 1.2, 1.4, 2, 2.5]}
        segmentColors={["white", "green", "orange", "orange", "red"]}
        textColor={"white"}
        labelFontSize={"12px"}
      />
      {machNumber} M{machNumber > 1.1 && <div className="alert"></div>}
    </div>
  );
}

export default Mach;
