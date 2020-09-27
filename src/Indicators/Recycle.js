import React, { Component } from 'react'
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import BarChart from '../Charts/BarChart'
import Information from '../Charts/Information'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Recycled extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weightsSolid: [],
            weightsComposte: [],
            levels: [],
            recycled: [0, 0, 0, 10, 40],
            waste: [7, 15, 19, 10, 40],
            totalLevel: 0,
            totalWeight: 0,
            totalRecycledLevel: 0,
            totalRecycledWeight: 0,
        }
        this.refreshValues = this.refreshValues.bind(this)
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

    getWasteRecycled(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getWasteRecycled.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var recycled = []
                res.map((i) => (i == null) ? recycled.push(0) : recycled.push(i))
                this.setState({ recycled })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getWasteRecycled(date0, date1)
        this.setState({ selectedTime: days })
    }

    calculatePerformance(x, y) {
        if (y === 0)
            return 0 + " %"
        else
            return parseInt((x / y) * 100) + " %"
    }

    renderPerformance(value, title, icon, bg) {
        return (
            <div className="el-1" >
                <Card title={title}
                    content={
                        <Information
                            info={value}
                            icon={icon}
                            measure={true}
                        />
                    }
                    bg={bg}
                />
            </div>
        )
    }

    totalRecyled() {
        return this.state.recycled.reduce((pv, cv) => pv + cv, 0)
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].recyclable.title}
                    description={lang[x].recyclable.desc}
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].recyclable.indic_1.title}
                            content={
                                <BarChart
                                    items={3}
                                    barWidth='15%'
                                    data1={[this.state.recycled[0]]}
                                    data2={[this.state.recycled[1]]}
                                    data3={[this.state.recycled[2]]}
                                    color1={'#92D050'}
                                    color2={'#FF0000'}
                                    color3={'#EBEB35'}
                                    legend1={lang[x].recyclable.indic_1.list[0]}
                                    legend2={lang[x].recyclable.indic_1.list[1]}
                                    legend3={lang[x].recyclable.indic_1.list[2]}
                                    title={lang[x].recyclable.indic_1.desc}
                                    legend={lang[x].recyclable.indic_1.list}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].recyclable.indic_2.title}
                            content={
                                <BarChart
                                    items={2}
                                    barWidth='15%'
                                    data1={[this.state.recycled[3]]}
                                    data2={[this.state.recycled[4]]}
                                    color1={'#C55A11'}
                                    color2={'#5B9BD5'}
                                    legend1={lang[x].recyclable.indic_2.list[0]}
                                    legend2={lang[x].recyclable.indic_2.list[1]}
                                    title={lang[x].recyclable.indic_2.desc}
                                    legend={lang[x].recyclable.indic_2.list}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                </div>

                <div className="row-1" >
                    {/* {this.renderPerformance(this.calculatePerformance(this.state.recycled[0], this.totalRecyled()), lang[x].recyclable.indic_3.title, "/images/indicators/recyc/bin_glass.png", "#92D050")} */}
                    {this.renderPerformance(Math.round((this.state.recycled[0] / this.state.waste[0]) * 100) + '%', lang[x].recyclable.indic_3.title, "/images/indicators/recyc/bin_glass.png", "#92D050")}
                    {this.renderPerformance(Math.round((this.state.recycled[1] / this.state.waste[1]) * 100) + '%', lang[x].recyclable.indic_4.title, "/images/indicators/recyc/bin_metal.png", "#FF0000")}
                    {this.renderPerformance(Math.round((this.state.recycled[2] / this.state.waste[2]) * 100) + '%', lang[x].recyclable.indic_5.title, "/images/indicators/recyc/bin_plastic.png", "#EBEB35")}
                    {this.renderPerformance(Math.round((this.state.recycled[3] / this.state.waste[3]) * 100) + '%', lang[x].recyclable.indic_6.title, "/images/indicators/recyc/bin_organic.png", "#C55A11")}
                    {this.renderPerformance(Math.round((this.state.recycled[4] / this.state.waste[4]) * 100) + '%', lang[x].recyclable.indic_7.title, "/images/indicators/recyc/bin_paper.png", "#5B9BD5")}
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recycled)
