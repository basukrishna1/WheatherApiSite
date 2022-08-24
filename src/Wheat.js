import React, { useState } from "react";
import "./Wheat.css";
export default function Wheat() {
  let [cityname, Setcityname] = useState("Mumbai");
  let [jsdata, Setjsdata] = useState("");
  let [city1, Setcity1] = useState("");
  function clicked() {
    Setcityname(city1);
    fetchApi();
  }

  const fetchApi = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=361e386f0c27eb09729908e4013cfeb9`;
    const response = await fetch(url);
    const datajson = await response.json();
    Setjsdata(datajson.main);
  };

  return (
    <>
      <div>
        <div className="container">
          {!jsdata ? (
            <p>Enter City</p>
          ) : (
            <>
              <div className="sec1">
                <div className="sec2">
                  <div className="city">{cityname}</div>
                  <div className="temp">{jsdata.temp}</div>
                  <span className="mini">Min:{jsdata.temp_min}</span>
                  <span className="maxi">Max:{jsdata.temp_max}</span>
                </div>
              </div>
            </>
          )}

          <div className="data">
            <input
              className="data1"
              type="text"
              onChange={(event) => {
                Setcity1(event.target.value);
              }}
            />
            <div>
              <button className="clicks" onClick={() => clicked()}>
                Click
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
