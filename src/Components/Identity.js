import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

export default class Identity extends Component {

    render() {
        return (
            <Container>

                <Title className="just" >
                    <Typography variant="h5" style={{ color: '#005475' }} noWrap>
                        {this.props.title}
                    </Typography>
                </Title>
                <Title className="just">
                    <Typography className="just" variant="subtitle1" noWrap style={{ overflow: 'hidden', textOverflow: 'ellipsis' }} >
                        {this.props.description}
                    </Typography>
                </Title>
                {/* <Description>
                    <Typography variant="caption" color="inherit" noWrap={true}>
                        {this.props.description}
                    </Typography>
                </Description> */}
                {/* <Description
                    className="header-4" readOnly value={this.props.description}
                /> */}
            </Container>
        )
    }
}

const Container = styled.div`
margin: 10px 10px 0;
width: inherit;
height: 60px;
display: flex;
flex-direction: column;
`;

const Title = styled.div`
flex: 3;
width: inherit; 
display: flex;
justfify-content: center;
align-items: center;
padding: 0 5px 0;
`;

// const Description = styled.textarea`
// flex: 2;
// display: flex;
// justfify-content: center;
// padding: 0 5px 0;
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;
// border: none;
// background: none;
// `;
