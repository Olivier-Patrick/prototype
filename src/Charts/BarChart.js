import React from 'react';
import ReactEcharts from 'echarts-for-react';

class BarChart extends React.Component {

    getSeries(x, w) {
        var items = [
            {
                name: this.props.legend1,
                type: 'bar',
                barWidth: w,
                data: this.props.data1,
                itemStyle: {
                    normal: {
                        color: this.props.color1
                    }
                }
            },
            {
                name: this.props.legend2,
                type: 'bar',
                barWidth: w,
                data: this.props.data2,
                itemStyle: {
                    normal: {
                        color: this.props.color2
                    }
                }
            },
            {
                name: this.props.legend3,
                type: 'bar',
                barWidth: w,
                data: this.props.data3,
                itemStyle: {
                    normal: {
                        color: this.props.color3
                    }
                }
            },
            {
                name: this.props.legend4,
                type: 'bar',
                barWidth: w,
                data: this.props.data4,
                itemStyle: {
                    normal: {
                        color: this.props.color4
                    }
                }
            },
            {
                name: this.props.legend5,
                type: 'bar',
                barWidth: w,
                data: this.props.data5,
                itemStyle: {
                    normal: {
                        color: this.props.color5
                    }
                }
            },
        ]
        var series = []
        for (var i = 0; i < x; i++) {
            series.push(items[i])
        }
        return series
    }

    render() {
        let option = {
            title: {
                text: this.props.title,
                x: "center",
                textStyle: {
                    fontStyle: 'normal',
                    fontFamily: 'dubai',
                    fontWeight: 'normal',
                    fontSize: 16,
                    color: '#005475'
                },
                top: 0,
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                feature: {
                    // saveAsImage: {title: ' '}
                }
            },
            legend: {
                data: this.props.legend,
                top: 37,
                textStyle: {
                    color: '#000',
                    fontSize: 11,
                    fontFamily: 'Electrolize',
                },
            },
            dataZoom: {
                show: false,
                realtime: false,
            },
            grid: {
                left: '5%',
                right: '5%',
                bottom: '3%',
                //top: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    data: this.props.time,
                    name: this.props.xAxisName,
                    nameLocation: 'middle',
                    nameGap: 27
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    //name: this.props.title,
                    nameLocation: 'middle',
                    nameGap: 33
                }
            ],
            series: this.getSeries(this.props.items, this.props.barWidth),
        }

        return (
            <ReactEcharts
                option={option}
                style={{ height: this.props.height, width: this.props.width, margin: 5 }}
            />
        );
    }

}


export default BarChart;
