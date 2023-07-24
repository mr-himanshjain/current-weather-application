import React from "react";
import { Card } from 'semantic-ui-react'
import moment from "moment";
 


export default function Forcast({ forcast,sdata }) {
    if (!forcast || forcast.length === 0) {
        return <div>No forecast data available.</div>;
    }
    return (
        <div style={{marginTop:20}}>
            <Card.Group itemsPerRow={1}>
                <Card className="forcast-head">
                    <Card.Content >
                    <Card.Header className="forcast-date">Date: {moment.unix(sdata.dt).format('LL')} </Card.Header>
                        <Card.Header>Temprature: {Math.round(((sdata.main.temp_max-273) + (sdata.main.temp_min-273))/2)} ℃</Card.Header>
                        <Card.Meta><b>Humidity: </b>{sdata.main.humidity}%</Card.Meta>
                        <Card.Description className="forcast-desc">
                            <b>Description:</b> {sdata.weather[0].description}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>

    )
}