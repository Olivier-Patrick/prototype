import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class PieChart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cnt: 0,
        };
    }

    getOption = () => ({
        color: this.props.colorList,
        title: {
            text: this.props.title,
            subtext: '',
            x: 'center',
            textStyle: {
                fontStyle: 'normal',
                fontFamily: 'dubai',
                fontWeight: 'normal',
                fontSize: 20,
                color: '#005475'
            },

        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        /*
        legend: {
            orient: 'vertical',
            left: 'left',
            //data: this.props.legend
        },*/
        series: [
            {
                name: '',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: this.props.data,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    });

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: this.props.height, width: this.props.width }}
            //onChartReady={this.onChartReady}
            //onEvents={onEvents}
            />
        );
    }
};
