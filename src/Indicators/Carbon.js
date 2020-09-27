import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Radar from '../Charts/Radar'
import Card from '../Components/Card'
import Information from '../Charts/Information'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import {
    consumedEnergy, consumedPV,
    consumedWater, recycledWater,
} from '../APIRequests'

var moment = require('moment')

// const t0 = new Date(2019, 0, 1) // instant 0: CEE opening day

// const footprintCEE = 50000 // kgCO2 (estimated total during CEE construction)

// const co2Absoption = 2000 // kgCO2 per year

class Carbon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedEnergy: 0,
            consumedPV: 0,
            consumedWater: 0,
            recycledWater: 0,
            transport: [78, 66, 3, 12, 6],
            totalWeight: 0,
            waste: [7, 15, 19, 10, 40],
            recycled: [0, 0, 0, 10, 40],
            days: 20
        }
        this.refreshValues = this.refreshValues.bind(this)
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
            (this.state.waste[0] - this.state.recycled[0]) * 1 + // glass
            (this.state.waste[1] - this.state.recycled[1]) * 6 + // metal
            (this.state.waste[2] - this.state.recycled[2]) * 33  // plastic
        return s
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
        this.otherPerformance()
        // var dates = this.calculateDates(days)
        // var date0 = dates.d0
        // var date1 = dates.d1
        // this.getTransport(date0, date1)
        // this.getWasteTotal(date0, date1)
        this.setState({ days })
    }

    getTransport(d0, d1) {
        const url = `${URL}/transport/getTransport.php?dateStart=${d1}&dateEnd=${d0}`
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                let transport = transport + res.map((i) => (i != null) ? i : 0)
                this.setState({ transport })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    calculateDates(days) {
        // Formalize dates: d0, d1 to m/d/y
        var myDate = new Date()
        var y = 0
        var m = 0
        var d = 0
        var d0 = ''
        var d1 = ''
        y = myDate.getFullYear()
        m = myDate.getMonth() + 1
        d = myDate.getDate()
        d0 = m + '/' + d + '/' + y
        if (days !== -1) {
            myDate.setDate(myDate.getDate() - days)
        } else {
            myDate = new Date(1990, 8, 1)
        }
        y = myDate.getFullYear()
        m = myDate.getMonth() + 1
        d = myDate.getDate()
        d1 = m + '/' + d + '/' + y
        var dates = { d0, d1 }
        return dates
    }

    getWasteTotal(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getWasteTotal.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null)
                    res[0] = 0;
                if (res[1] == null)
                    res[1] = 0;
                this.setState({
                    totalWeight: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].GES.title}
                    description={lang[x].GES.desc}
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_1.title}
                            content={
                                <div style={{ flex: 1, flexDirection: 'column' }} >
                                    <Radar
                                        name="Performance par secteur"
                                        legends={[
                                            lang[x].GES.indic_1.Element_1.label,
                                            lang[x].GES.indic_1.Element_2.label,
                                            lang[x].GES.indic_1.Element_3.label,
                                            lang[x].GES.indic_1.Element_4.label,
                                            lang[x].GES.indic_1.Element_5.label,
                                        ]}
                                        data={[
                                            50, // Fix: Transport performance data not added yet
                                            this.energyPerformance(),
                                            this.waterPerformance(),
                                            this.recyclingPerformance(),
                                            this.otherPerformance()
                                            // Fix: Autres : Construction du batiment, les effets benefiques des espaces verts...
                                            // Fix: water to CO2 coef
                                        ]}
                                        data2={[
                                            this.state.transport.reduce((pv, cv) => pv + cv, 0),
                                            this.energyFootprint(),
                                            this.waterFootprint(),
                                            this.wasteFootprint(),
                                            Math.round(83 * this.state.days) / 10
                                        ]}
                                    />
                                    {/* <div className="just" style={{ width: 'inherit', height: 50 }} >
                                        Autres : Construction du CEE, jardin botanique ...
                                    </div> */}
                                </div>
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_2.title}
                            content={
                                <img alt=''
                                    style={{ maxHeight: 700, maxWidth: 700, borderRadius: 10 }}
                                    src="/images/indicators/radar/botanic.jpg"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_5.title}
                            content={
                                <Information
                                    info={[
                                        Math.round((
                                            this.energyFootprint() +
                                            this.waterFootprint() +
                                            this.state.transport.reduce((pv, cv) => pv + cv, 0) +
                                            this.wasteFootprint())
                                            * 10) / 10
                                        // Fix: add waste carbon footprint to the total
                                    ] + ' kgCO2'}

                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-2" >
                        <Card title={lang[x].GES.indic_3.title}
                            content={
                                <Information
                                    info={lang[x].GES.indic_3.desc}
                                />
                            }
                        />
                    </div>
                    <div className="el-3" >
                        <Card //title="Radar des performances"
                            content={
                                <Information
                                    info={lang[x].GES.indic_4.title}
                                />
                            }
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carbon)
