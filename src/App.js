import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Forcast from './component/Forcast';
import WeatherCard from './component/WeatherCard';
import axios from 'axios';
import { Loader } from 'semantic-ui-react';

const URL = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `a928589cf6a532a8ade5fdebed521768`

function App() {
  const [latitude, setlatitude] = useState(null);
  const [longitude, setlongitude] = useState(null);
  const [City, setcity] = useState('');
  const [temprature, settemprature] = useState(null);
  const [humidity, sethumidity] = useState(null);
  const [sunrise, setsunrise] = useState(null);
  const [sunset, setsunset] = useState(null);
  const [icon, seticon] = useState('');
  const [country, setcountry] = useState('');
  const [forcast, setforcast] = useState([])
  const [sdata, setdata] = useState('');
  const [loading, setloading] = useState(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setlatitude(position.coords.latitude);
      setlongitude(position.coords.longitude);
    });

    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then((waetherdata) => {
        console.log("getting data from first api")
        console.log(waetherdata.data);
        setloading(false)
        settemprature(waetherdata.data.main.temp)
        setsunset(waetherdata.data.sys.sunset)
        setsunrise(waetherdata.data.sys.sunrise)
        sethumidity(waetherdata.data.main.humidity)
        setcity(waetherdata.data.name)
        seticon(waetherdata.data.weather[0].main)
        setcountry(waetherdata.data.sys.country)
        setforcast(waetherdata.data.dt)
        setdata(waetherdata.data)
      }).catch(error => {
        console.error('Error fetching data from first api:', error);
      });

  }, [latitude, longitude])
  return (
    <div className='main'>
      <Header />
      {loading ? (
        <Loader active inline='centered' />
      ) : (
        <WeatherCard
          temprature={temprature}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          City={City}
          icon={icon}
          country={country}
        />
      )}
      <Forcast
        forcast={forcast}
        sdata={sdata}
      /> 
    </div>
  );
}

export default App;
