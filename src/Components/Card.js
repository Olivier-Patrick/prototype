import React, { Component } from 'react';
import styled from 'styled-components'

export default class Card extends Component {

    render() {
        return (
            <Container>
                {this.props.title ?
                    <Title>
                        {this.props.title}
                    </Title>
                    :
                    null
                }
                {
                    this.props.content ?
                        <Body style={{ background: 'linear-gradient(to right bottom, white, ' + this.props.bg + ')' }} >
                            {this.props.content}
                        </Body>
                        :
                        null
                }
            </Container>
        )
    }
}

const Container = styled.div`
margin: 10px;
flex: 1;
display: flex;
flex-direction: column;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
border-radius: 10px;
transition: all 0.03s ease-in-out;
&:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
`;

const Title = styled.div`
height: 30px;
width: inherit;
color: white;
background: linear-gradient(to right bottom, limegreen, green);
border-radius: 10px 10px 0 0;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 10px 0 rgba(0, 0, 0, 0.1);
justify-content: center;
align-items: center;
display: flex;
`;
//background-color: DodgerBlue;

const Body = styled.div`
flex: 1;
display: flex;
border-radius: 10px;
padding: 10px;
justify-content: center;
align-items: center;
`;
