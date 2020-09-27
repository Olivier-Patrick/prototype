import React, { Component } from 'react';
import styled from 'styled-components'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { langmoment } from '../Settings/moments'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'
var moment = require('moment')

// Fix: Add fast changeDates icons

class Controls extends Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            startDate: null,
            endDate: null,
            focusedInput: null,
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
        this.changeDates(moment().subtract(20, 'days'), moment())
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth });
    }

    changeDates(startDate, endDate) {
        this.setState({ startDate, endDate })
        if (startDate && endDate)
            this.props.refreshValues(endDate.diff(startDate, 'days'))
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        moment.updateLocale(langmoment[x].lang, langmoment[x].config)
        return (
            <Container>
                {/* <div style={{ flex: 1 }} /> */}
                <Text>
                    {lang[x].Control.label}
                </Text>
                <DateRangePicker
                    startDatePlaceholderText="Début"
                    endDatePlaceholderText="Fin"
                    startDateId="sdid"
                    endDateId="edid"
                    numberOfMonths={1}
                    noBorder={true}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onDatesChange={({ startDate, endDate }) => this.changeDates(startDate, endDate)} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={(day) => {
                        return !day.isSameOrBefore();
                    }}
                />

                <Message>
                    {this.props.remarks}
                    {/* Fix: Inserer des remarques au lieu de cette phrase */}
                </Message>

                {
                    // this.state.width > 785 ?
                    //     <div style={{ flex: 6, display: 'flex', flexDirection: 'row' }} >
                    //         <div style={{ flex: .5, maxWidth: 30 }} />
                    //         <Button
                    //             onClick={() => this.changeDates(moment().subtract(1, 'days'), moment())}
                    //         >
                    //             <Icon alt="" src="/images/indicators/controls/controls_24h.png" />
                    //         </Button>
                    //         <Button
                    //             onClick={() => this.changeDates(moment().subtract(7, 'days'), moment())}
                    //         >
                    //             <Icon alt="" src="/images/indicators/controls/controls_07days.png" />
                    //         </Button>
                    //         <Button
                    //             onClick={() => this.changeDates(moment().subtract(30, 'days'), moment())}
                    //         >
                    //             <Icon alt="" src="/images/indicators/controls/controls_30days.png" />
                    //         </Button>
                    //         <Button
                    //             onClick={() => this.changeDates(moment().subtract(90, 'days'), moment())}
                    //         >
                    //             <Icon alt="" src="/images/indicators/controls/controls_90days.png" />
                    //         </Button>
                    //         <Button
                    //             onClick={() => this.changeDates(moment("09/01/1990"), moment())}
                    //         >
                    //             <Icon alt="" src="/images/indicators/controls/infinity.png" />
                    //         </Button>
                    //     </div>
                    //     :
                    // null
                }
            </Container >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls)

const Container = styled.div`
@media (max-width: 767px) {
    height: 150px;
    flex-direction: column;
}
@media (min-width: 768px) {
    height: 50px;
    flex-direction: row;
}
margin: 10px;
width: inherit;
display: flex;
border-width: 1px;
border-style: solid;
border-color: lightgray;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

const Text = styled.div`
@media (max-width: 767px) {
    width: '100%';
    height: 50px;
}
@media (min-width: 767px) {
    width: 160px;
    height: '100%';
    align-items: center;
}
display: flex;
padding: 10px;
margin-left: 10px;
`;

const Message = styled.div`
flex: 1;
align-items: center;
display: flex;
padding: 10px;
margin-left: 20px;
`;

const Button = styled.button`
@media (max-width: 767px) {
    flex: 0;
    display: flex;
}
@media (min-width: 768px) {
    flex: 1;
    max-width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    margin: 5px;
    border-radius: 50px;
    cursor: 'pointer';
    transition: all 0.03s ease-in-out;
    &:hover {
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
    }
}
`;

const Icon = styled.img`
border-radius: 50px;
width: 35px;
height: 35px;
`;
