import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components'

export default class Progress extends Component {
    render() {
        return (
            <Box>
                {/* <div className="just" style={{flex: 1, display: 'flex'}}>
                    {this.props.title + ': ' + this.props.value + this.props.unit}
                </div> */}
                <Label>
                    {this.props.title}
                </Label>
                <Measure>
                    {this.props.value + this.props.unit}
                </Measure>
                <Bar>
                    <CircularProgressbar
                        strokeWidth={10} percentage={(this.props.value * 100) / this.props.max} max={this.props.max}
                        styles={{
                            root: { flex: 1, margin: 3, maxHeight: 60, maxWidth: 60 },
                            path: { stroke: 'green' }
                        }} initialAnimation={true}
                    />
                    <Image src={this.props.icon} alt='' />
                </Bar>
            </ Box>
        )
    }
}

const Box = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 5px;
`;

const Image = styled.img`
max-width: 45px;
max-height: 45px;
border-radius: 50px;
position: absolute;
`;

const Bar = styled.div`
flex: 5;
display: flex;
justify-content: center;
align-items: center;
margin: 5px;
`;

const Label = styled.div`
font-size: 10px;
width: inherit; 
height: 20px;
display: flex;
justify-content: center;
align-items: center;
overflow-x: visible;
font-weight: 600;
`;

const Measure = styled.div`
font-size: 12px;
width: inherit; 
height: 20px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
background-color: whitesmoke;
overflow-x: visible;
font-weight: 600;
`;
