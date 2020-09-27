import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Loading extends PureComponent {
    /*
        constructor(props) {
            super(props)
            this.state = {
                max: 100,
            }
        }
        componentDidMount() {
            this.getMax()
        }
    
        getMax() {
            var max = this.props.data.reduce((pv, cv) => pv + cv, 0)
            this.setState({ max })
        }
    */
    getData() {
        var max = this.props.data.reduce((pv, cv) => pv + cv, 0)
        var data = []
        this.props.data.map((x) => data.push(Math.round(100 - (x / max) * 100)))
        return data
    }

    _t = null;
    getOption = () => {
        return {
            animation: true,
            title: {
                // text: 'Bilan carbon du CEE (Tonnes équ. CO2)',
                textStyle: {
                    fontStyle: 'normal',
                    fontFamily: 'dubai',
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: '#005475'
                },
            },
            tooltip: {},
            legend: {
                // data: ['(Allocated Budget)']
            },
            radar: {
                //shape: 'circle',
                indicator: [
                    { name: this.props.legends[0] + '\n' + this.props.data2[0] + ' kgCO2', max: 100 },
                    { name: this.props.legends[1] + '\n' + this.props.data2[1] + ' kgCO2', max: 100 },
                    { name: this.props.legends[2] + '\n' + this.props.data2[2] + ' kgCO2', max: 100 },
                    { name: this.props.legends[3] + '\n' + this.props.data2[3] + ' kgCO2', max: 100 },
                    { name: this.props.legends[4] + '\n' + this.props.data2[4] + ' kgCO2', max: 100 },
                ],
                nameGap: 10,
                //zlevel: 100,

            },
            textStyle: {
                fontStyle: 'normal',
                fontFamily: 'dubai',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#005475'
            },
            //color : ['red'],
            series: [{
                name: this.props.name,
                type: 'radar',
                areaStyle: { normal: {} },
                data: [
                    {
                        // value: this.getData(),
                        value: this.props.data
                        // name: 'Bilan carbone (kg équi. CO2)'
                    },
                ],
                color: 'limegreen'
            }]
        };
    }

    onChartReady = (chart) => {
        this._t = setTimeout(function () {
            chart.hideLoading();
        }, 1000);
    }

    getLoadingOption = () => {
        return {
            text: 'Téléchargement...',
            color: '#4413c2',
            textColor: '#270240',
            maskColor: 'rgba(0, 70, 0, 0.5)',
            zlevel: 0
        };
    }

    componentWillUnmount() {
        clearTimeout(this._t);
    }

    render() {
        console.log(this.props.data)
        return (
            <ReactEcharts
                option={this.getOption()}
                // onChartReady={this.onChartReady}
                // loadingOption={this.getLoadingOption()}
                showLoading={false}
                style={{ flex: 1 }}
            />
        );
    }
}