import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactSpeedometer from "react-d3-speedometer";

function App() {
  const [speed, setSpeed] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      axios({
        method: "get",
        url: `http://localhost:8111/state`,
        withCredentials: false,
      }).then((res) => {
        setSpeed(res.data["RPM 1"]);
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {};
  return (
    <div className="App">
      <ReactSpeedometer
        value={speed}
        currentValueText="RPM"
        minValue={0}
        maxValue={10000}
        segments={10}
        startColor={"white"}
        endColor={"red"}
        textColor={"white"}
      />
      {speed}
    </div>
  );
}

export default App;
