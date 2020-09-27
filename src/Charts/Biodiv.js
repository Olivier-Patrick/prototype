import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import styled from 'styled-components'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Biodiv extends Component {

    getStateColor(status) {
        switch (status) {
            case "0":
                return 'limegreen'
            case "1":
                return 'orange'
            case "2":
                return 'red'
            default:
                return 'whitesmoke'
        }
    }

    getStateLabel(status) {
        let x = this.props.lang === 'fr' ? 0 : 1
        switch (status) {
            case "0":
                return lang[x].Faune.state_0
            case "1":
                return lang[x].Faune.state_1
            case "2":
                return lang[x].Faune.state_2
            default:
                return lang[x].Faune.state_3
        }
    }

    render() {
        let x = this.props.lang === 'fr' ? true : false
        return (
            <MDBCol>
                <MDBCard style={{ height: 510, width: "22rem", margin: 5, borderRadius: 10 }}>
                    <MDBCardImage className="img-fluid" src={this.props.image} />
                    <MDBCardBody>
                        <State>
                            <StateColor style={{ backgroundColor: this.getStateColor(this.props.status) }} />
                            <div className="" style={{ marginLeft: 20, flex: 1 }} >
                                {x ? this.getStateLabel(this.props.status) : this.getStateLabel(this.props.status)}
                            </div>
                        </State>
                        <MDBCardTitle>{x ? this.props.title : this.props.title_ar}</MDBCardTitle>
                        <MDBCardText className="biodiv-text">
                            {x ? this.props.text : this.props.text_ar}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Biodiv)

const State = styled.div`
width: inherit;
height: 30px;
font-size: 16px;
margin-bottom: 5px;
display: flex;
flex-direction: row;
align-items: center;
`;

const StateColor = styled.div`
width: 30px;
height: 30px;
display: flex;
border-radius: 50px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;
