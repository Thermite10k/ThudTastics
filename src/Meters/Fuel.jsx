import React from "react";
import "./css/Fuel.css";
function Fuel(props) {
  const totalFuel = props.totalFuel;
  const currentFuel = props.currentFuel;
  const remainingFuel = (currentFuel / totalFuel).toFixed(2) * 100;
  return (
    <div className="fuelContainer">
      Fuel:
      {remainingFuel ? remainingFuel : 0} %
    </div>
  );
}

export default Fuel;
