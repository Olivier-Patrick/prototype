import React, { Component } from 'react';
import styled from 'styled-components'
// import { URL } from '../Settings/Server'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../Settings/ReduxStore/adminActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import Card from '../Components/Card'

class Adminbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <Container>
                <Card title={"Bonjour " + this.props.admin.data.prenom + ' !'}
                    content={
                        null
                    }
                />
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adminbar)

const Container = styled.div`
width: 360px;
height: inherit;
display: flex;
flex-direction: column;
`;

// const Content = styled.div`
// flex: 1;
// display: flex;
// flex-direction: row;
// padding: 5px;
// `;

// const Box = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// background-color: orange;
// margin: 5px;
// `;
