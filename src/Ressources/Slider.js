import React, { Component } from "react";
import {
    MDBCarouselItem, MDBView,
    MDBCarousel, MDBCarouselInner,
} from
    "mdbreact";

import Info from '../Charts/Information'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class CarouselPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            elements: []
        }
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <MDBCarousel activeItem={1} length={lang[x].Ressources.length} showControls={true} showIndicators={true} className="z-depth-1" style={{ margin: 10, borderRadius: 10, flex: 1 }} interval={Timers.resrcItems} >
                <MDBCarouselInner>
                    {
                        lang[x].Ressources.map((x) => {
                            return (
                                <MDBCarouselItem itemId={x.id} key={x.id}>
                                    <MDBView >
                                        <img className="d-block w-100" src={x.picture} alt="slide show" style={{ borderRadius: 10 }} />
                                    </MDBView>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                        <h3
                                            className="h3-responsive"
                                            style={{ borderRadius: 50, color: 'black', fontWeight: '600', margin: 10 }}
                                        >
                                            {x.title}
                                        </h3>
                                        <Info info={x.desc} />
                                    </div>
                                </MDBCarouselItem>
                            )
                        })
                    }
                </MDBCarouselInner>
            </MDBCarousel>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage)
