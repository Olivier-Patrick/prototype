import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import PieChart from '../Charts/PieChart'
import Information from '../Charts/Information'
import ReactSpeedometer from "react-d3-speedometer"
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import { consumedWater, recycledWater } from '../APIRequests'

class Water extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consumedWater: 0,
            recycledWater: 0,
            max: 100,
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
    }

    async refreshValues(days) {
        days = days === 0 ? 10000 : days
        this.setState({
            consumedWater: await consumedWater(days),
            recycledWater: await recycledWater(days),
            // recycledWater: 500 * days,
        })
        // switch (days) {
        //     case 1:
        //         this.setState({ max: 10 })
        //         break;
        //     case 7:
        //         this.setState({ max: 50 })
        //         break;
        //     case 30:
        //         this.setState({ max: 100 })
        //         break;
        //     case 90:
        //         this.setState({ max: 500 })
        //         break;
        //     default:
        //         this.setState({ max: 1000 })
        //         break;
        // }
    }

    consumedPercent() {
        let total = this.state.consumedWater + this.state.recycledWater
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedWater / total) * 1000) / 10 + ' %'
    }

    recycledPercent() {
        let total = this.state.consumedWater + this.state.recycledWater
        return total === 0 ? 0 + ' %' : Math.round((this.state.recycledWater / total) * 1000) / 10 + ' %'
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator">
                <Identity
                    title={lang[x].Water.title}
                    description={lang[x].Water.desc}
                />
                <Controls
                    refreshValues={this.refreshValues}
                />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].Water.indic_1.title}
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max}
                                    value={Math.round((this.state.consumedWater / 1000) * 10) / 10}
                                    needleColor="purple"
                                    startColor="dodgerblue"
                                    segments={5}
                                    endColor="darkblue"
                                    needleTransitionDuration={2000}
                                    needleTransition="easeElastic"
                                    textColor="grey"
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Water.indic_2.title}
                            content={
                                <PieChart
                                    height="95%"
                                    width="95%"
                                    legend={[lang[x].Water.indic_2.Element_1.label, lang[x].Water.indic_2.Element_2.label]}
                                    title={lang[x].Water.indic_2.desc}
                                    titleFont='15'
                                    colorList={['#92D050', 'dodgerblue']}
                                    data={[
                                        { value: this.state.recycledWater / 1000, name: lang[x].Water.indic_2.Element_2.label + "\n" + this.recycledPercent() },
                                        { value: this.state.consumedWater / 1000, name: lang[x].Water.indic_2.Element_1.label + "\n" + this.consumedPercent() },
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Water.indic_3.title}
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max}
                                    value={Math.round((this.state.recycledWater / 1000) * 10) / 10}
                                    needleColor="purple"
                                    startColor="red"
                                    endColor="limegreen"
                                    segments={7}
                                    needleTransitionDuration={2000}
                                    needleTransition="easeElastic"
                                    textColor="grey"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-2" >
                    <div className="el-1" >
                        <Card title={lang[x].Water.indic_4.title}
                            content={
                                <Information
                                    info={lang[x].Water.indic_4.comment}
                                    icon="/images/2-green.png"
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Water.indic_5.title}
                            content={
                                <Information
                                    info={lang[x].Water.indic_5.comment}
                                    icon="/images/3-blue.png"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Water)
