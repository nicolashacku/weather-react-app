import Button from "@mui/material/Button";
import WeatherCard from "./WeatherCard";
import { useState, useEffect } from "react";
function Request({ city }) {
  const [weather, setWeather] = useState({});
  const Consultar = async () => {
    const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&lang=es&key=DYP9TFX27DY9TA4G7XJLK2R82&contentType=json`;
    const response = await fetch(API_URL);
    const data = await response.json();

    if(response.status.toString() == "200"){
      var success = true
    }
    
    const state = {
      status: success,
      resolvedAddress: data.resolvedAddress,
      description: data.description,
      conditions: data.days[0].conditions,
      temp: data.days[0].temp,
      tempMin: data.days[0].tempmin,
      tempMax: data.days[0].tempmax,
      humidity: data.days[0].humidity,
    };
    setWeather(state);
  };
  return (
    <>
      <Button style={{width:"300px"}}onClick={Consultar} variant="contained">
        Consultar
      </Button>
      <WeatherCard
        conditions={weather.conditions}
        temp={weather.temp}
        tempMin={weather.tempMin}
        tempMax={weather.tempMax}
        humidity={weather.humidity}
        description={weather.description}
        resolvedAddress={weather.resolvedAddress}
        status={weather.status}
      />
    </>
  );
}
export default Request;
