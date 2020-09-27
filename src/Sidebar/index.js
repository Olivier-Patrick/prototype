import React, { Component } from 'react';
import styled from 'styled-components'
import Information from '../Charts/Information'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import Card from '../Components/Card'

import Progress from './Progress'
import {
    consumedEnergy, consumedPV,
    consumedWater, recycledWater,
} from '../APIRequests'
import { Menu } from '@material-ui/core';
import {NaNfixe_test } from '../Menu/sw'
import { SuperValue} from '../Menu/index'
import {flag } from '../Menu/sw'

var timer = 0

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedWater: 0,
            recycledWater: 0,
            consumedEnergy: 0,
            consumedPV: 0,
            totalWaste: 91,
            totalRecycled: 50,
            transport: 165,
            recycled: [0, 0, 0, 10, 40],
        }
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
                    totalWaste: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

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
                    totalRecycled: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getTransport(d0, d1) {
        const url = `${URL}/transport/getTransport.php?dateStart=${d1}&dateEnd=${d0}`
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var transport = 10
                //transport = transport + res.map((i) => (i != null) ? i : 0)
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
        var dates = { d0, d1 };
        return dates;
    }

    async refreshValues(days) {
        
  

           
             
     
            this.setState({
            
            consumedEnergy:  
            NaNfixe_test(consumedEnergy(days),1),
            consumedPV: NaNfixe_test( consumedPV(days),0),
            // consumedPV: 42000 * days,
            consumedWater:   NaNfixe_test( consumedWater(days),3),
            recycledWater: NaNfixe_test(recycledWater(days),2)
            // recycledWater: 500 * days,


        })
    
      
        
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getWasteTotal(date0, date1)
        this.getRecycledTotal(date0, date1)
        this.getTransport(date0, date1)
    }

    componentDidMount() {
        // this.refreshValues(7)
        timer = setInterval(() => { this.refreshValues(20) }, 10000);
        
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    avoidedCarbon() {
        let s =
            Math.round((this.state.consumedPV / 1000) * 0.784 * 10) / 10 +
            Math.round((this.state.recycledWater / 1000) * 0.5 * 10) / 10 +
            (this.state.recycled[0]) * 1 +
            (this.state.recycled[1]) * 6 +
            (this.state.recycled[2]) * 33 +
            (this.state.recycled[3]) * 0 +
            (this.state.recycled[4]) * 2296
        return s
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <Container>
                <div style={{ display: 'flex', flex: 1 }} >
                    <Card title={lang[x].SideBar.title}
                        content={
                            <Information
                                info={lang[x].SideBar.desc}
                            // Fix: icon for general information like bulbe
                            />
                        }
                    />
                </div>
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={Math.round((this.state.consumedWater / 1000) * 10) / 10} max={50} // Fix: needs review 
                                icon={'/images/sidebar/water.png'} title={lang[x].SideBar.indic_1.title} unit={' m3'} />

                            <Progress value={Math.round((this.state.recycledWater / 1000) * 10) / 10} max={this.state.consumedWater + this.state.recycledWater}
                                icon={'/images/sidebar/water_.png'} title={lang[x].SideBar.indic_2.title} unit={' m3'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={Math.round((this.state.consumedEnergy / 1000) * 10) / 10} max={2500} // Fix: needs review 
                                icon={'/images/sidebar/energy.png'} title={lang[x].SideBar.indic_3.title} unit={' kWh'} />

                            <Progress value={Math.round((this.state.consumedPV / 1000) * 10) / 10} max={this.state.consumedEnergy}
                                icon={'/images/sidebar/energy_.png'} title={lang[x].SideBar.indic_4.title} unit={' kWh'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={this.state.totalWaste} max={200} icon={'/images/sidebar/waste.png'} title={lang[x].SideBar.indic_5.title} unit={' kg'} />
                            <Progress value={this.state.totalRecycled} max={200} icon={'/images/sidebar/waste_.png'} title={lang[x].SideBar.indic_6.title} unit={' kg'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={this.avoidedCarbon()} max={1000} icon={'/images/sidebar/ges.png'} title={lang[x].SideBar.indic_7.title} unit={' kgCO2'} />
                            <Progress value={this.state.transport} max={500} icon={'/images/sidebar/transport.png'} title={lang[x].SideBar.indic_8.title} unit={' kgCO2'} />
                        </Content>
                    }
                />

            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

const Container = styled.div`
width: 360px;
height: inherit;
display: flex;
flex-direction: column;
`;

const Content = styled.div`
flex: 1;
display: flex;
flex-direction: row;
padding: 5px;
`;

// const Box = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// background-color: orange;
// margin: 5px;
// `;
