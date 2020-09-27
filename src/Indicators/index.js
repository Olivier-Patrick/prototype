import React, { Component } from 'react'
import styled from 'styled-components'
import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import Water from './Water'
import Energy from './Energy'
import Transport from './Transport'
import Waste from './Waste'
import Recycle from './Recycle'
import Carbon from './Carbon'
import AirQuality from './AirQuality'
import Fauna from './Fauna'
import Flora from './Flora'

let timer = 0
let timerNav = 0

class Indicators extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentComp: 0,
            Components: [
                {
                    delay: 7, key: 0, label: "Energies",
                    icon: "/images/indicators/indic_energy.png",
                    content: <Energy />,
                    // content: <Tempo>Not yet available</Tempo>,
                },
                {
                    delay: 7, key: 1, label: "Eaux",
                    icon: "/images/indicators/indic_water.png",
                    content: <Water />,
                },
                {
                    delay: 7, key: 2, label: "Déchets",
                    icon: "/images/indicators/indic_waste.png",
                    content: <Waste />,
                },
                {
                    delay: 7, key: 3, label: "Recyclage",
                    icon: "/images/indicators/indic_recycle.png",
                    content: <Recycle />,
                },
                {
                    delay: 7, key: 4, label: "Transport",
                    icon: "/images/indicators/indic_transport.png",
                    content: <Transport />,
                },
                {
                    delay: 7, key: 5, label: "Air",
                    icon: "/images/indicators/indic_air.png",
                    content: <AirQuality />,
                },
                {
                    delay: 15, key: 6, label: "Faune",
                    icon: "/images/indicators/indic_fauna.png",
                    content: <Fauna />,
                },
                {
                    delay: 15, key: 7, label: "Flore",
                    icon: "/images/indicators/indic_flora.png",
                    content: <Flora />,
                },
                {
                    delay: 7, key: 8, label: "GES",
                    icon: "/images/indicators/indic_ges.png",
                    content: <Carbon />,
                },
            ]
        }
    }

    nextSlide(i) {
        let length = this.state.Components.length
        i = i + 1 < length ? i + 1 : 0
        this.setState({ currentComp: i })
        timer = setTimeout(() => { this.nextSlide(i) }, Timers.indicItems);
    }

    componentDidMount() {
        this.nextSlide(-1)
        // timerNav = setTimeout(() => this.props.history.push(`/ressources`), 3000)
        timerNav = setTimeout(() => this.props.history.push(`/ressources`), Timers.indicators)
    }

    componentWillUnmount() {
        clearInterval(timer)
        clearTimeout(timerNav)
    }

    render() {
        let i = this.state.currentComp
        let y = this.props.lang === 'fr' ? 0 : 1
        // Fix: Make Header div scrollable
        return (
            <Container>
                <Header>
                    <div style={{ flex: 1 }} />
                    {
                        this.state.Components.map((x) => {
                            return (
                                <Button
                                    style={{
                                        boxShadow: x.key === this.state.currentComp ? '0 4px 10px 0 rgba(0, 0, 0, 0.2)' : null,
                                        // borderBottomWidth: x.key === this.state.currentComp ? 2 : 1,
                                        // borderBottomStyle: 'solid'
                                    }}
                                    key={x.key}
                                    onClick={() => { this.setState({ currentComp: x.key }) }}
                                >
                                    <Icon src={x.icon} />
                                    <Title style={{ fontWeight: x.key === this.state.currentComp ? 'bold' : 'normal' }} >{lang[y].indicatorsNames[x.key]}</Title>
                                </Button>
                            )
                        })
                    }
                    <div style={{ flex: 1 }} />
                </Header>
                {
                    this.state.Components[i].content
                }
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Indicators)

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`;

const Header = styled.div`
height: 60px;
width: inherit;
display: flex;
flex-direction: row;
overflow-x: auto;
background-color: white;
`;

const Button = styled.button`
margin: 5px 5px 5px;
display: flex;
opacity: 1;
background: none;
border: none;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 15px;
&:hover {
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
}
@media (max-width: 1023px) {
    height: 50px;
    width: 60px;
}
@media (min-width: 1024px) {
    height: 50px;
    width: 120px;
}
`;

const Icon = styled.img`
max-width: 30px;
max-height: 30px;
border-raduis: 50px;
`;

const Title = styled.div`
flex: 1;
color: black;
justify-content: center;
align-items: center;
display: flex;
opacity: .7;
@media (max-width: 1023px) {
    font-size: 12px;
}
@media (min-width: 1024px) {
    font-size: 14px;
}
`;
