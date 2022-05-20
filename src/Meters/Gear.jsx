import React from "react";
import "./css/AirBrake.css";

function Gear(props) {
  const landingGear = props.airbrake;

  return (
    <div className="airbrakeContainer">
      <div className="AirBrakeSecondCard">
        <div>LANDING GEAR</div>
        <div className="lights">
          <div
            className={
              landingGear === 100
                ? "circle green-deployed"
                : "circle green-retracted"
            }
          ></div>
          <div
            className={
              landingGear === 0 ? "circle red-deployed" : "circle red-retracted"
            }
          ></div>
        </div>
        {landingGear === 100 ? (
          <div className="deployed">DEPLOYED</div>
        ) : landingGear === 0 ? (
          <div> RETRACTED</div>
        ) : (
          <div>Mech working</div>
        )}
      </div>
    </div>
  );
}

export default Gear;
