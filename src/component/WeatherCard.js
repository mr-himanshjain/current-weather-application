import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faCloudBolt, faCloudRain, faSmog, faSnowman, faSun, faUmbrella } from '@fortawesome/free-solid-svg-icons'

export default function WeatherCard(
  { temprature, humidity, sunrise, sunset, City, icon, country }) {
    let weatherIcon = null;
    if(icon === 'Haze')
    {
      weatherIcon = <FontAwesomeIcon icon={faSmog} size="lg"/>
    } else if(icon === 'Thunderstorm'){
      weatherIcon = <FontAwesomeIcon icon={faCloudBolt} size="lg"/>
    } else if(icon === 'Drizzle'){
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} size="lg"/>
    } else if(icon === 'Rain'){
      weatherIcon = <FontAwesomeIcon icon={faUmbrella} size="lg"/>
    } else if(icon === 'Snow'){
      weatherIcon = <FontAwesomeIcon icon={faSnowman} size="lg"/>
    } else if(icon === 'Mist'){
      weatherIcon = <FontAwesomeIcon icon={faSmog} size="lg"/>
    } else if(icon === 'Clear'){
      weatherIcon = <FontAwesomeIcon icon={faSun} size="lg"/>
    } else if(icon === 'Clouds'){
      weatherIcon = <FontAwesomeIcon icon={faCloud} size="lg"/>
    }
  
  return (
  <Card className='weather-card-main'>
    <Card.Content className='weather-card'>
      <Card.Header className='weather-card-child'>{City}</Card.Header>
      <div className='Icon-container'>{weatherIcon}</div>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <div className='weather-card'>
              <h5 className='weather-card-child'>Date:  {moment().format('MMMM Do YYYY, h:mm a')}</h5>
              <div className='weather-card'><strong>Country: {country}</strong></div>
            </div>

            <div className='weather-card'>
              <div className='weather-card-child'>
              <b>Temprature: </b>  {Math.floor(temprature - 273)} ℃
              </div>
              <div className='weather-card-child'>
             <b> Humidity: </b> {humidity} %
              </div>
            </div>
            <div className='weather-card'>
              <div className='weather-card-child'>
             <b> Sunrise:</b>  {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}
              </div>
              <div className='weather-card-child'>
              <b>Sunset:</b>  {new Date(sunset * 1000).toLocaleTimeString('en-IN')}
              </div>
            </div>
          </Feed.Content>
        </Feed.Event>

      </Feed>
    </Card.Content>
  </Card>
)};