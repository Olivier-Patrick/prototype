import React, { Component } from 'react';
// ---
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import BarChart from '../Charts/BarChart'
import Information from '../Charts/Information'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Waste extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weightsSolid: [0.8, 1.75, 2.2],
            weightsComposte: [4.6, 1.1],
            totalLevel: 0,
            totalWeight: 0,
            waste: [7, 15, 19, 10, 40],
            totalRecycledLevel: '--',
            totalRecycledWeight: '--'            
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
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
        var dates = { d0, d1 };
        return dates;
    }

    getWasteWeightSolid(d0, d1) {
        // Weights
        const urlW = `${URL}/dechets/getWasteWeightSolid.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(urlW)
            .then(res => res.json())
            .then((res) => {
                var weightsSolid = []
                res.map((i) => (i == null) ? weightsSolid.push(0) : weightsSolid.push(i))
                this.setState({ weightsSolid })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getWasteWeightComposte(d0, d1) {
        // Weights
        const urlW = `${URL}/dechets/getWasteWeightComposte.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(urlW)
            .then(res => res.json())
            .then((res) => {
                var weightsComposte = []
                res.map((i) => (i == null) ? weightsComposte.push(0) : weightsComposte.push(i))
                this.setState({ weightsComposte })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // getWasteTotal(d0, d1) {
    //     // Weights
    //     const url = `${URL}/dechets/getWasteTotal.php?dateStart=${d1}&dateEnd=${d0}`;
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then((res) => {
    //             if (res[0] == null)
    //                 res[0] = 0;
    //             if (res[1] == null)
    //                 res[1] = 0;
    //             this.setState({
    //                 totalLevel: res[0],
    //                 totalWeight: res[1]
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    getRecycledTotal(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getRecycledTotal.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null)
                    res[0] = 0;
                if (res[1] == null)
                    res[1] = 0;
                this.setState({
                    totalRecycledLevel: res[0],
                    totalRecycledWeight: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getWasteWeightSolid(date0, date1)
        this.getWasteWeightComposte(date0, date1)
        // this.getWasteRecycled(date0, date1)
        // this.getLevels()
        // this.getWasteTotal(date0, date1)
        this.getRecycledTotal(date0, date1)
        this.setState({ selectedTime: days })
    }

    // componentDidMount() {
    //     this.refreshValues(7)
    // }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator">
                <Identity
                    title={lang[x].Waste.title}
                    description={lang[x].Waste.desc}
                />
                <Controls
                    refreshValues={this.refreshValues}
                />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].Waste.indic_1.title}
                            content={
                                <BarChart
                                    items={3}
                                    barWidth='15%'
                                    data1={[this.state.waste[0]]}
                                    data2={[this.state.waste[1]]}
                                    data3={[this.state.waste[2]]}
                                    color1={'#92D050'}
                                    color2={'#FF0000'}
                                    color3={'#EBEB35'}
                                    // legend1='Verre'
                                    // legend2='Metal'
                                    legend1={lang[x].Waste.indic_1.list[0]}
                                    legend2={lang[x].Waste.indic_1.list[1]}
                                    legend3={lang[x].Waste.indic_1.list[2]}
                                    title={lang[x].Waste.indic_1.desc}
                                    legend={lang[x].Waste.indic_1.list}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Waste.indic_2.title}
                            content={
                                <BarChart
                                    items={2}
                                    barWidth='15%'
                                    data1={[this.state.waste[3]]}
                                    data2={[this.state.waste[4]]}
                                    color1={'#C55A11'}
                                    color2={'#5B9BD5'}
                                    legend1={lang[x].Waste.indic_2.list[0]}
                                    legend2={lang[x].Waste.indic_2.list[1]}
                                    title={lang[x].Waste.indic_2.desc}
                                    legend={lang[x].Waste.indic_2.list}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].Waste.indic_3.title}
                            content={
                                <Information
                                    info={this.state.totalRecycledLevel + " m3"}
                                    icon="/images/indicators/waste/level.png"
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Waste.indic_5.title}
                            content={
                                <Information
                                    // info={this.state.totalRecycledWeight + " kg"}
                                    // info={(this.state.waste.reduce((pv, cv) => pv + cv, 0)) + " kg"}
                                    info="60 kg/mois"
                                    icon="/images/indicators/waste/weight.png"
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-2" >
                        <Card // title=""
                            content={
                                <Information
                                    info={lang[x].Waste.indic_6.desc}
                                    // Fix: icon for general information like bulbe
                                    icon="/images/splash.png"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Waste)
