import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { langmoment } from '../Settings/moments'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'
var moment = require('moment')

let timer = 0

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temp: '--',
            humidity: '--',
            pressure: '--',
            temp_min: '--',
            temp_max: '--',
            wind_spd: '--',
            wind_deg: '--',
        }
    }

    getForecast() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Rabat&APPID=0f7dd1d3a07f70d596cfe96402d45a82")
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        icon: res.weather[0].icon? res.weather[0].icon : 'icon',
                        temp: Math.round(res.main.temp - 273.15),
                        temp_min: Math.round(res.main.temp_min - 273.15),
                        temp_max: Math.round(res.main.temp_max - 273.15),
                        humidity: Math.round(res.main.humidity),
                        wind_deg: Math.round(res.wind.deg) === 360 ? 0 : Math.round(res.wind.deg),
                        wind_spd: Math.round(res.wind.speed * 36) / 10,
                    });
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    componentDidMount() {
        timer = setInterval(() => this.getForecast(), 6000)
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        moment.updateLocale(langmoment[x].lang, langmoment[x].config)
        return (
            <Container>
                <Box>
                    <Label long>
                        {lang[x].Meteo.lebel_1}
                    </Label>
                    <Measure>
                        {this.state.temp + ' °C'}
                    </Measure>
                    <img alt=" " style={{ width: 40, height: 40, marginRight: 10 }}
                        src={'http://openweathermap.org/img/w/' + this.state.icon + '.png'}
                    />
                </Box>
                <Box>
                    <Icon
                        src={'/images/footer/tempmax.png'}
                    />
                    <Label>
                        {lang[x].Meteo.lebel_2}
                    </Label>
                    <Measure>
                        {this.state.temp_max + ' °C'}
                    </Measure>
                </Box>
                <Box>
                    <Icon
                        src={'/images/footer/tempmin.png'}
                    />
                    <Label>
                        {lang[x].Meteo.lebel_3}
                    </Label>
                    <Measure>
                        {this.state.temp_min + ' °C'}
                    </Measure>
                </Box>
                <Box>
                    <Icon
                        src={'/images/footer/humidity.png'}
                    />
                    <Label>
                        {lang[x].Meteo.lebel_4}
                    </Label>
                    <Measure>
                        {this.state.humidity + ' %'}
                    </Measure>
                </Box>
                <Box>
                    <Icon
                        src={'/images/footer/windy.png'}
                    />
                    <Label>
                        {lang[x].Meteo.lebel_5}
                    </Label>
                    <Measure>
                        {this.state.wind_spd + ' km/h ' + this.state.wind_deg + '°'}
                    </Measure>
                </Box>
                <Time>
                    <div style={{ flex: 1 }} />
                    <div style={{ flex: 2, display: 'flex', color: 'white', fontWeight: '600' }} className="just" >
                        {moment().format('LLLL')}
                    </div>
                    <div style={{ flex: 1 }} />
                </Time>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)

const Container = styled.div`
z-index: 1000;
height: 60px;
width: inherit;
display: flex;
flex-direction: row;
background-color: dodgerblue;
-webkit-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.5);
box-shadow: 0px -1px 5px 0px rgba(0,0,0,0.5);
padding: 5px;
`;

const Box = styled.div`
margin: 5px 10px 5px;
height: 40px;
width: 260px;
display: flex;
flex-direction: row;
border-radius: 50px;
-webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
background: linear-gradient(to left, dodgerblue, lightblue);
`;

const Label = styled.div`
height: inherit;
width: ${props => props.long ? '120px' : '80px'};
color: white;
display: flex;
font-weight: 600;
font-size: 18px;
border-radius: 0 50px 50px 0;
border-radius: ${props => props.long ? '50px' : '0 50px 50px 0'};
align-items: center;
justify-content: center;
background-color: dodgerblue;
`;

// width: ${props => props.long ? '120px' : '80px'};
const Measure = styled.div`
border-radius: 0 50px 50px 0;
height: inherit;
flex: 1;
color: white;
opacity: 1;
font-weight: 600;
font-size: 18px;
display: flex;
align-items: center;
justify-content: center;
`;

const Icon = styled.img`
height: 40px;
width: 40px;
background-color: dodgerblue;
`;

const Time = styled.div`
margin: 5px 10px 5px;
flex: 1;
display: flex;
flex-direction: row;
border-radius: 50px;
-webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5);
background-color: dodgerblue;
`;
