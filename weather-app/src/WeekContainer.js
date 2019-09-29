import React, { Component } from 'react'
import axios from 'axios'
import DayCard from './DayCard'
import DegreeToggle from './DegreeToggle'

class WeekContainer extends Component {
    state = {
        fullData: [],
        dailyData: [],
        degreeType:"fahrenheit"
    }

    updateForecastDegree = event =>{
        this.setState({
            degreeType:event.target.value
        },()=>console.log(this.state))
    }

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=411038,in&units=metric&APPID=c9aa851ae8af497e9fb53651c0bbf7e9`

        axios.get(weatherURL)
            .then(res => {
                const dailyData = res.data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
                this.setState({
                    fullData: res.data.list,
                    dailyData: dailyData
                })
                console.log(this.state)
            })
    }

    formatDayCards = () => {
        return this.state.dailyData.map((reading, index) => <DayCard reading={reading} key={index} />)
    }

    render() {
        return (
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forecast</h1>
                <h5 className="display-5 text-muted">Pune,India</h5>
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }
}

export default WeekContainer