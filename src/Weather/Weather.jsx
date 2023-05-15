import axios from "axios";
import { useState, useEffect } from "react";

export default function Weather(params) {
  const [currentWeather, setCurrentWeather] = useState("");
  const [isFetchingWeather, setIsFetchingWeather] = useState(false);
  // const [lat, setLat] = useState("");
  // const [long, setLong] = useState("");
  const [caption, setCaption] = useState("Enter Lat Long");
  const [geo, setGeo] = useState({
    lat: "51.2538",
    long: "85.3232",
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getGeo);

    console.log("use effect");
  }, []);

  const getGeo = (data) => {
    console.log(data, "data");
    console.log(data.coords.latitude, "data");
    console.log(data.coords.longitude, "data");

    setGeo({
      lat: data.coords.latitude,
      long: data.coords.longitude,
    });

    // setLat(data.coords.latitude)
    // setLong(data.coords.longitude)
  };

  const fetchWeatherData = () => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${geo.lat}&longitude=${geo.long}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,cloudcover_low`
      )
      .then((response) => {
        setIsFetchingWeather(false);
        console.log(response, "response response");
        setCurrentWeather(response.data.current_weather.temperature);
      })
      .catch((error) => {
        console.log(error, "backend error");
      });
  };

  const getMyWeather = () => {
    setIsFetchingWeather(true);
    fetchWeatherData();
    setCaption("Enter Latidue and Longitude");
    // document.getElementById("caption-text").innerText = "Enter Latidue and Longitude"
  };

  const handleLatChange = (event) => {
    // setLat(event.target.value);
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

  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="caption-text">
            {caption}
          </span>
        </div>
        <input
          onChange={handleLatChange}
          type="text"
          className="form-control"
          value={geo.lat}
        />
        <input
          onChange={handleLongChange}
          type="text"
          className="form-control"
          value={geo.long}
        />
      </div>

      {/* <input onChange={handleLatChange} placeholder="Enter Lat" />
      <input onChange={handleLongChange} placeholder="Enter Long" /> */}
      <button onClick={getMyWeather}>Get Weather</button>
      <div>
        Your Current Weather is : {currentWeather} {currentWeather && " °C"}
      </div>

      <div>
        {currentWeather > 10 ? (
          <div>
            <iframe
              src="https://giphy.com/embed/HvYdoLbPqSdNu"
              width="480"
              height="339"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          currentWeather && (
            <div>
              <iframe
                src="https://giphy.com/embed/OWxrxRHY6afRu"
                width="480"
                height="360"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
              ></iframe>
            </div>
          )
        )}
      </div>

      {isFetchingWeather && (
        <iframe
          src="https://giphy.com/embed/xTk9ZvMnbIiIew7IpW"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
}
