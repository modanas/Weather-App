import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
 const [weatherInfo, setWeatherInfo] = useState({
  city : "Kolkata",
  feelsLike : 36.36,
  humidity : 66,
  temp : 30.97,
  tempMax : 30.97,
  tempMin : 30.97,
  weather : "haze"
 });

 let updateInfo = (newInfo) => {
  setWeatherInfo(newInfo)
 }
 return (
  <div style={{ textAlign: "center" }}>
   <h2>Weather App by Anas</h2>
   <SearchBox updateInfo={updateInfo}/>
   <InfoBox info={weatherInfo}/>
  </div>
 )
}