import React from "react";
import "./css/AirBrake.css";

function AirBrake(props) {
  const airbrake = props.airbrake;

  return (
    <div className="airbrakeContainer">
      <div className="AirBrakeSecondCard">
        <div>AIR BRAKE</div>
        <div className="lights">
          <div
            className={
              airbrake === 100
                ? "circle green-deployed"
                : "circle green-retracted"
            }
          ></div>
          <div
            className={
              airbrake === 0 ? "circle red-deployed" : "circle red-retracted"
            }
          ></div>
        </div>
        {airbrake === 100 ? (
          <div className="deployed">DEPLOYED</div>
        ) : airbrake === 0 ? (
          <div> RETRACTED</div>
        ) : (
          <div>Mech working</div>
        )}
      </div>
    </div>
  );
}

export default AirBrake;
