import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import styled from 'styled-components'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import { airQuality } from '../APIRequests'

class AirQuality extends Component {

    constructor(props) {
        super(props)
        this.state = {
            airquality: []
        }
    }

    renderSpace(title, temp, humid, co2) { // Space could be a hallway, a room or an open area
        let x = this.props.lang === 'fr' ? 0 : 1
        var bghumid = '/images/indicators/air/humidopt.png'
        var bgtemp = '/images/indicators/air/AirQtempopt.png'
        var bgco2 = '/images/indicators/air/air60.png'
        if (co2 < 300)
            bgco2 = '/images/indicators/air/air20.png'
        if (co2 > 800)
            bgco2 = '/images/indicators/air/air80.png'
        if (humid < 35)
            bghumid = '/images/indicators/air/humidmin.png'
        if (humid > 70)
            bghumid = '/images/indicators/air/humidmax.png'
        if (temp < 19)
            bgtemp = '/images/indicators/air/AirQtempmin.png'
        if (temp > 22)
            bgtemp = '/images/indicators/air/AirQtempmax.png'
        return (
            <div className="el-1" style={{ margin: 20 }} >
                <Card title={title}
                    content={
                        <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }} >

                            <Element style={{ flexDirection: 'row', display: 'flex' }} >
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {lang[x].Air.indic_1.Element_1.label}
                                    </Title>
                                </Element>
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {lang[x].Air.indic_1.Element_2.label}
                                    </Title>
                                </Element>
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {lang[x].Air.indic_1.Element_3.label}
                                    </Title>
                                </Element>

                            </Element>
                            <Element className="just" big style={{ flexDirection: 'row' }} >
                                {
                                    temp !== null ?
                                        <Element className="just">
                                            <img alt=''
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bgtemp}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element />
                                }
                                {
                                    co2 !== null ?
                                        <Element className="just">
                                            <img alt=''
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bghumid}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element className="just">
                                            <img alt=''
                                                src={'/images/indicators/air/humid0.png'}
                                                className="is-icon is-active"
                                                style={{ opacity: 0.8, maxWidth: 90, maxHeight: 90, margin: 5 }}
                                            />
                                        </Element>
                                }
                                {
                                    humid !== null ?
                                        <Element className="just">
                                            <img alt=''
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bgco2}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element className="just">
                                            <img alt=''
                                                src={'/images/indicators/air/air0.png'}
                                                className="is-icon is-active"
                                                style={{ opacity: 0.8, maxWidth: 90, maxHeight: 90, margin: 5 }}
                                            />
                                        </Element>
                                }
                            </Element>
                            <Element className="just" style={{ flexDirection: 'row' }} >
                                {
                                    temp !== null ?
                                        <Element className="just" big>
                                            {temp + ' °C'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                </Element>
                                }
                                {
                                    humid !== null ?
                                        <Element className="just" big>
                                            {humid + ' %'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                </Element>
                                }
                                {
                                    co2 !== null ?
                                        <Element className="just" big>
                                            {co2 + ' ppm'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                        </Element>
                                }
                            </Element>
                        </div>
                    }
                />
            </div>
        )
    }

    async refreshValues() {
        this.setState({ airquality: await airQuality() })
    }

    componentDidMount() {
        this.refreshValues()
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator" style={{ padding: 20 }}>
                <Identity
                    title={lang[x].Air.title}
                    description={lang[x].Air.desc}
                />
                <div className="row-1" >
                    {this.renderSpace(lang[x].Air.indic_1.title, this.state.airquality[3], this.state.airquality[7], this.state.airquality[10])}
                    {this.renderSpace(lang[x].Air.indic_2.title, this.state.airquality[4], this.state.airquality[8], this.state.airquality[11])}
                </div>
                <div className="row-1" >
                    {this.renderSpace(lang[x].Air.indic_3.title, this.state.airquality[1], this.state.airquality[5], null)}
                    {this.renderSpace(lang[x].Air.indic_4.title, this.state.airquality[2], this.state.airquality[6], this.state.airquality[9])}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirQuality)

const Element = styled.div`
Flex: ${props => props.big ? '2' : '1'};
font-size: 22px;
`;

const Title = styled.div`
Flex: 1;
font-size: 22px;
`;
// background: ${props => props.big ? "palevioletred" : "white"};
// color: ${props => props.big ? "white" : "palevioletred"};
