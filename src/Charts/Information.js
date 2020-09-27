import React, { Component } from 'react';
import styled from 'styled-components'

export default class Information extends Component {

    render() {
        return (
            <Container >
                <Info className="just" style={{ fontSize: this.props.measure ? 30 : null }}>
                    {this.props.info}
                </Info>
                <Icon alt=""
                    src={this.props.icon}
                />
            </Container>
        )
    }
}

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: row;
padding: 5px;
`;

const Info = styled.div`
flex: 7;
display: flex;
text-align: center;
@media (max-width: 767px) {
    font-size: 16px;
}
@media (min-width: 767px) {
    font-size: 14px;
}
@media (min-width: 1024px) {
    font-size: 18px;
}
`;

// padding: 10px;
const Icon = styled.img`
margin: 10px;
border-radius: 50px;
@media (max-width: 767px) {
    max-width: 50px;
    max-height: 50px;
}
@media (min-width: 767px) {
    max-width: 70px;
    max-height: 70px;
}
`;
