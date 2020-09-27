import React, { Component } from 'react';
import Slider from './Slider'
// import Card from '../Components/Card'
// import Info from '../Charts/Information'
import { Timers } from '../Settings/Timers'

let timer = 0

export default class Homescreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        timer = setTimeout(() => this.props.history.push(`/`), Timers.ressources)
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    render() {
        return (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
                <Slider />
                {/* <Card // title=""
                    content={
                        <Info
                            info={"Information Text here..."}
                        />
                    }
                /> */}
            </div>
        );
    }
}







// import React, { Component } from 'react'
// import styled from 'styled-components'
// import { Timers } from '../Settings/Timers'

// import { connect } from 'react-redux'
// // import lang from '../Settings/Lang'
// import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

// import Card from '../Components/Card'
// import Info from '../Charts/Information'

// let timer = 0
// let timerNav = 0

// class Indicators extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             currentComp: 0,
//             Components: [
//                 {
//                     delay: 7, key: 0, label: "Energies",
//                     icon: "/images/indicators/indic_energy.png",
//                     picture: "/images/ressources/tmp.jpg",
//                 },
//                 {
//                     delay: 7, key: 1, label: "Eaux",
//                     icon: "/images/indicators/indic_water.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 2, label: "Déchets",
//                     icon: "/images/indicators/indic_waste.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 3, label: "Recyclage",
//                     icon: "/images/indicators/indic_recycle.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 4, label: "Transport",
//                     icon: "/images/indicators/indic_transport.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 5, label: "Air",
//                     icon: "/images/indicators/indic_air.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 6, label: "GES",
//                     icon: "/images/indicators/indic_ges.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 7, label: "Faune",
//                     icon: "/images/indicators/indic_fauna.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//                 {
//                     delay: 7, key: 8, label: "Flore",
//                     icon: "/images/indicators/indic_flora.png",
//                     picture: "/images/indicators/radar/ges.jpg",
//                 },
//             ]
//         }
//     }

//     nextSlide(i) {
//         let length = this.state.Components.length
//         i = i + 1 < length ? i + 1 : 0
//         this.setState({ currentComp: i })
//         timer = setTimeout(() => { this.nextSlide(i) }, Timers.resrcItems);
//     }

//     componentDidMount() {
//         this.nextSlide(-1)
//         // timerNav = setTimeout(() => this.props.history.push(`/ressources`), 3000)
//         timerNav = setTimeout(() => this.props.history.push(`/`), Timers.ressources)
//     }

//     componentWillUnmount() {
//         clearInterval(timer)
//         clearTimeout(timerNav)
//     }

//     render() {
//         let i = this.state.currentComp
//         // Fix: Make Header div scrollable
//         return (
//             <Container>
//                 {/* <Header>
//                     <div style={{ flex: 1 }} />
//                     {
//                         this.state.Components.map((x) => {
//                             return (
//                                 <Button
//                                     style={{ boxShadow: x.key === this.state.currentComp ? '0 4px 10px 0 rgba(0, 0, 0, 0.2)' : null }}
//                                     key={x.key}
//                                     onClick={() => { this.setState({ currentComp: x.key }) }}
//                                 >
//                                     <Icon src={x.icon} />
//                                     <Title style={{ fontWeight: x.key === this.state.currentComp ? 'bold' : 'normal' }} >{x.label}</Title>
//                                 </Button>
//                             )
//                         })
//                     }
//                     <div style={{ flex: 1 }} />
//                 </Header> */}
//                 <div className="indicator">
//                     <div className="row-1" >
//                         <div className="el-1" >
//                             <Card // title="Energie globale consommée (kWh)"
//                                 content={
//                                     <Text title>
//                                         Station photovoltaique
//                                     </Text>
//                                 }
//                             />
//                         </div>
//                     </div>
//                     <div className="row-3" >
//                         <div className="el-1" >
//                             <Card //title="Consommation d'énergie\npar équipements"
//                                 content={
//                                     <Text
//                                     // info="Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage."
//                                     >
//                                         Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage.
//                                     </Text>
//                                 }
//                             />
//                         </div>
//                         <div className="el-1" >
//                             <Card // title="Performance"
//                                 content={
//                                     <img
//                                         style={{ maxHeight: 900, maxWidth: 900, borderRadius: 10 }}
//                                         src={this.state.Components[i].picture}
//                                     />
//                                 }
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Indicators)

// const Container = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// `;

// const Text = styled.div`
// margin: 10px;
// color: #005475;
// display: flex;
// opacity: 1;
// font-weight: ${props => props.title ? '400' : '300'};
// @media (max-width: 1023px) {
//     font-size: ${props => props.title ? '28px' : '20px'};
// }
// @media (min-width: 1024px) {
//     font-size: ${props => props.title ? '40px' : '24px'};
// }
// `;
