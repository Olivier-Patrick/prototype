import React, { Component } from 'react';
import { URL } from '../Settings/Server'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import {
    Identity, People, General, Remarks, Waste, Recycle,
    Water, Energy, Fauna, Flora, Carbon, Transport
} from './Details'

import {
    consumedEnergy, consumedPV,
    consumedWater, recycledWater,
} from '../APIRequests'

var moment = require('moment')

class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedEnergy: 0,
            consumedPV: 0,
            consumedWater: 0,
            recycledWater: 0,
            transport: [78, 66, 3, 12, 6],
            statFauna: [0, 1, 6],
            statFlora: [0, 2, 9],
            waste: [7, 15, 19, 10, 40],
            recycled: [0, 0, 0, 10, 40],
            elements: []
        }
    }

    setElements() {
        // Fix: include indicators
        let i = this.props.lang === 'fr' ? 0 : 1
        // // if (!x)
        // let x = 0
        let header = (
            <Header>
                <Intellcap />
                <div style={{ flex: 1 }} />
                <Fondation />
            </Header>
        )
        let elements = []
        if (this.props.energy) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Energy.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Energy.desc}</Typography>
                    {Energy(this.state.consumedEnergy, this.state.consumedPV, lang[i].Energy)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.water) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Water.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Water.desc}</Typography>
                    {Water(this.state.consumedWater, this.state.recycledWater, lang[i].Water)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.transport) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Transport.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Water.desc}</Typography>
                    {Transport(lang[i].Transport)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.waste) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Waste.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Waste.desc}</Typography>
                    {Waste(lang[i].Waste)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.recycle) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].recyclable.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].recyclable.desc}</Typography>
                    {Recycle(lang[i].recyclable)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.biodiv) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Faune.name + ' / ' + lang[i].Flore.name}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Flore.desc}</Typography>
                    {Flora(this.state.statFlora, lang[i].Flore)}
                    {/*<div style={{ height: 20 }} />*/}
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[i].Faune.desc}</Typography>
                    {Fauna(this.state.statFauna, lang[i].Faune)}
                    {Remarks("Remarques spéciales")}
                </div>
            )
        }
        this.setState({ elements })
        // this.forceUpdate()
    }

    async refreshValues(days) {
        this.setState({
            consumedEnergy: await consumedEnergy(days),
            // consumedPV: await consumedPV(days),
            consumedPV: 42000 * days,
            consumedWater: await consumedWater(days),
            // recycledWater: await recycledWater(days),
            recycledWater: 500 * days,
        })
    }

    componentDidMount() {
        this.refreshValues(this.props.days)
    }

    componentWillReceiveProps() {
        this.setElements()
    }

    energyPerformance() {
        return this.state.consumedEnergy === 0 ? 100 :
            Math.round((this.state.consumedPV / this.state.consumedEnergy) * 1000) / 10
    }

    waterPerformance() {
        return (this.state.recycledWater + this.state.consumedWater) === 0 ? 100 :
            Math.round((this.state.recycledWater / (this.state.recycledWater + this.state.consumedWater)) * 1000) / 10
    }

    recyclingPerformance() {
        let w = this.state.waste.reduce((pv, cv) => pv + cv, 0)
        let r = this.state.recycled.reduce((pv, cv) => pv + cv, 0)
        return w === 0 ? 100 : Math.round((r / w) * 1000) / 10
    }

    otherPerformance() {
        let t0 = moment([2019, 0, 1]) // CEE opening day
        let tx = moment() // today
        let days = tx.diff(t0, 'days')
        return 50 + Math.round(((2000 / 365) * days) / 5000) / 10
        // 2000: Estimated co2Absoption per year
        // 5000: Estimated total carbon footprintCEE during construction
    }

    energyFootprint() {
        return Math.round((this.state.consumedEnergy - this.state.consumedPV) * 0.001 * 0.784 * 10) / 10
    }

    waterFootprint() {
        return Math.round(this.state.consumedWater * 0.001 * 0.5 * 10) / 10
    }


    wasteFootprint() {
        let s =
            (this.state.waste[0] - this.state.recycled[0]) * 1 +
            (this.state.waste[0] - this.state.recycled[0]) * 6 +
            (this.state.waste[0] - this.state.recycled[0]) * 33 +
            (this.state.waste[0] - this.state.recycled[0]) * 0 +
            (this.state.waste[0] - this.state.recycled[0]) * 0
        return s
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div style={{ margin: 20, borderWidth: 1, borderStyle: 'solid', borderColor: 'gray' }}>
                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie1.title1}</Typography>
                {General(lang[x].rapport)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie2.title}</Typography>
                {Identity(this.props.reference, this.props.date, this.props.period, lang[x].rapport.partie2.title3, lang[x].rapport)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie3.title}</Typography>
                {People(this.props.diffusion, this.props.precision, this.props.generatedby, this.props.authorizedby, lang[x].rapport)}

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].GES.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[x].GES.desc}</Typography>
                    {Carbon(
                        [
                            50, // Fix: Transport performance data not added yet
                            this.energyPerformance(),
                            this.waterPerformance(),
                            this.recyclingPerformance(),
                            this.otherPerformance(),
                        ],
                        [
                            this.state.transport.reduce((pv, cv) => pv + cv, 0),
                            this.energyFootprint(),
                            this.waterFootprint(),
                            this.wasteFootprint(),
                            Math.round(83 * this.props.days) / 10,
                        ],
                        [
                            lang[x].GES.indic_1.Element_1.label,
                            lang[x].GES.indic_1.Element_2.label,
                            lang[x].GES.indic_1.Element_3.label,
                            lang[x].GES.indic_1.Element_4.label,
                            lang[x].GES.indic_1.Element_5.label
                        ]

                        // Fix: Autres : Construction du batiment, les effets benefiques des espaces verts...
                        // Fix: water to CO2 coef

                    )}
                    {Remarks("Remarques spéciales")}
                    {/* Fix: translate "Remarques spéciales" */}
                </div>

                {
                    this.state.elements.map((x) => {
                        return x
                    })
                }

            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)

const Header = styled.div`
margin: 10px;
display: flex;
flex-direction: row;
height: 80px;
width: inherit;
`;

const Intellcap = styled.div`
height: 60px;
width: 180px;
margin: 10px;
background-image: url(/images/intellcapx.png);
background-position: 0 0;
background-size: 100% 100%;
`;

const Fondation = styled.div`
height: 60px;
width: 200px;
margin: 10px;
background-image: url(/images/fondation.png);
background-position: 0 0;
background-size: 100% 100%;
`;
