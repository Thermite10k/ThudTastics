import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";
import Speed from "./Meters/Speed";
import RPM from "./Meters/RPM";
import OilTemp from "./Meters/OilTemp";
import WaterTemp from "./Meters/WaterTemp";
import Mach from "./Meters/Mach";
import Gear from "./Meters/Gear";
import AirBrake from "./Meters/AirBrake";
import Fuel from "./Meters/Fuel";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      axios({
        method: "get",
        url: `http://localhost:8111/state`,
        withCredentials: false,
      }).then((res) => {
        setData(res.data);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {};
  return (
    <div className="App">
      <div className="all-container">
        <div className="MetersContainer">
          <div className="MeterContainer">
            <Speed height={250} width={250} speed={data["IAS, km/h"]} />
          </div>
          <div className="MeterContainer">
            <RPM
              className="meter"
              height={250}
              width={250}
              RPM={data["RPM 1"]}
            />
          </div>
        </div>
        <div className="secondCol">
          <div className="MetersContainer-2">
            <div className="MeterContainer-2">
              <Mach height={150} width={150} machNumber={data["M"]} />
            </div>

            <div className="MeterContainer-2">
              <OilTemp height={150} width={150} temp={data["oil temp 1, C"]} />
            </div>
            <div className="MeterContainer-2">
              <WaterTemp
                height={150}
                width={150}
                temp={data["water temp 1, C"]}
              />
            </div>
          </div>
          <div className="DigitsContainer">
            <div className="digits">
              <AirBrake airbrake={data["airbrake, %"]} />
            </div>
            <div className="digits">
              <Gear airbrake={data["gear, %"]} />
            </div>
            <div className="digits">
              <Fuel
                totalFuel={data["Mfuel0, kg"]}
                currentFuel={data["Mfuel, kg"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
