import React, { Component } from "react";
import Slider from "react-slick";
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Information from '../Charts/Information'

import Biodiv from '../Charts/Biodiv'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

let timer = 0

class Flora extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            biodiv: lang[1].Flore.list,
            biostat: [0, 2, 9]
            // [4, 2, 2]
        }
    }

    getFlora() {
        const url = `${URL}/bio/getFlora.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biodiv) => {
                // this.setState({ biodiv })
                this.setState({ biodiv: lang[1].Flore.list })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getStatFlora() {
        const url = `${URL}/bio/getStatFlora.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biostat) => {
                this.setState({ biostat })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        // this.getFlora()
        // this.getStatFlora()
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: Timers.indicItems / 10,
        }
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].Flore.title}
                    description={lang[x].Flore.desc}
                />
                <div style={{ flexDirection: 'row', display: 'flex', padding: 5, marginTop: 5 }} >
                    <Slider {...settings} >
                        {
                            this.state.biodiv.map((x) => {
                                return (
                                    <Biodiv
                                        key={x[1]}
                                        title={x[1]}
                                        title_ar={x[5]}
                                        image={URL + '/' + x[2]}
                                        text={x[3]}
                                        text_ar={x[6]}
                                        status={x[4]}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_0}
                            content={
                                <Information
                                    info={this.state.biostat[2]}
                                    icon={"/images/indicators/biodiv/good.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_1}
                            content={
                                <Information
                                    info={this.state.biostat[1]}
                                    icon={"/images/indicators/biodiv/bad.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Faune.state_2}
                            content={
                                <Information
                                    info={this.state.biostat[0]}
                                    icon={"/images/indicators/biodiv/dangerx.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flora)
