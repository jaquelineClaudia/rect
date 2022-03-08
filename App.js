import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [grades, setGrades] = useState(0);
  const [isFh, setIsFh] = useState(true);
  const[weather, setWeather] = useState({});

  const success = pos => {
    console.log(pos.coords)
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
  
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=73211536b985c2da900d496dfee088ba`)
    .then((res) => setWeather(res.data));
  
  useEffect(() => {
  navigator.geolocation.getCurrentPosition(success);
  }, [])

  const convertGrades = () => {
    if (isFh) {
      setGrades((grades * 9/5) + 32);
      setIsFh(false);
    } else {
      setGrades((grades-32) * 5/9);
      setIsFh(true);
    }
  };

  return (
    <div className="App">

      <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt=""/> 

      <div className="weather-card">
        <ul>
          <li>
            <b>City: </b> {weather.weather?.[0].City}
          </li>
          <li>
            <b>Weather: </b> {grades} {isFh ? "centigrades" : "farenhen"}{" "}
          </li>
          <li>
            <b>Preasure: </b> {weather.weather?.[0].preassure}
          </li>
          const useCurrentWeather = () => {
        </ul>
        <button onClick={convertGrades}>
          Convert to {isFh ? "centigrade" : "farenhen"}
        </button>
      </div>
    </div>
  );
export default App;
