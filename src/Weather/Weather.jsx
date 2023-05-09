import axios from "axios";
import { useState } from "react";

export default function Weather(params) {
  const [currentWeather, setCurrentWeather] = useState("");

  const [geo, setGeo] = useState({
    lat: "",
    long: "",
  });

  const handleLatChange = (event) => {
    setGeo({
      lat: event.target.value,
      long: geo.long,
    });
  };

  const handleLongChange = (event) => {
    setGeo({
      lat: geo.lat,
      long: event.target.value,
    });
  };

  const getMyWeather = () => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
      )
      .then((response) => {
        console.log(response, "response response");
        setCurrentWeather(response.data.current_weather.temperature);
      })
      .catch(() => {});
  };

  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="">
            Enter Lat and Long
          </span>
        </div>
        <input
          onChange={handleLatChange}
          type="text"
          className="form-control"
        />
        <input
          onChange={handleLongChange}
          type="text"
          className="form-control"
        />
      </div>

      {/* <input onChange={handleLatChange} placeholder="Enter Lat" />
      <input onChange={handleLongChange} placeholder="Enter Long" /> */}
      <button onClick={getMyWeather}>Get Weather</button>
      <div>Your Current Weather is : {currentWeather}</div>
    </>
  );
}
