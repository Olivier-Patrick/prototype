import React, { Component } from 'react';
// import styled from 'styled-components'
// ---
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import BarChart from '../Charts/BarChart'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Transport extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transport: [78, 66, 3, 12, 6],
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
        var dates = { d0, d1 }
        return dates
    }

    getTransport(d0, d1) {
        const url = `${URL}/transport/getTransport.php?dateStart=${d1}&dateEnd=${d0}`
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var transport = []
                res.map((i) => (i == null) ? transport.push(0) : transport.push(i))
                this.setState({ transport: transport })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        //this.getTransport(date0, date1)
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].Transport.title}
                    description={lang[x].Transport.desc}
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].Transport.indic_1.title}
                            content={
                                <BarChart
                                    items={5}
                                    barWidth='15%'
                                    data1={[this.state.transport[0]]}
                                    data2={[this.state.transport[1]]}
                                    data3={[this.state.transport[2]]}
                                    data4={[this.state.transport[3]]}
                                    data5={[this.state.transport[4]]}
                                    color1={'#A0A0A0'}
                                    color2={'#C06020'}
                                    color3={'#5B9BD5'}
                                    color4={'#92D050'}
                                    color5={'orange'}
                                    legend1={lang[x].Transport.indic_1.list[0]}
                                    legend2={lang[x].Transport.indic_1.list[1]}
                                    legend3={lang[x].Transport.indic_1.list[2]}
                                    legend4={lang[x].Transport.indic_1.list[3]}
                                    legend5={lang[x].Transport.indic_1.list[4]}
                                    title={lang[x].Transport.indic_1.desc}
                                    legend={null}
                                    time={['']}
                                    height='85%'
                                    width='85%'
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Transport)
