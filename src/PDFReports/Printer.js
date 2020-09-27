import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Report from './Report'

export default class Printer extends Component {
    render() {
        return (
            <ExpansionPanelDetails style={{ flexDirection: 'column', padding: 10, overflowY: 'hidden', height: 80 }} >
                <ReactToPrint
                    trigger={() => <Button style={{ width: 120, height: 40, margin: 10 }} variant="contained" color="primary" >Imprimer</Button>}
                    content={() => this.report}
                />
                <Report
                    ref={el => (this.report = el)}
                    days={this.props.days}
                    energy={this.props.energy}
                    water={this.props.water}
                    biodiv={this.props.biodiv}
                    fauna={this.props.fauna}
                    flora={this.props.flora}
                    transport={this.props.transport}
                    waste={this.props.waste}
                    recycle={this.props.recycle}
                    diffusion={this.props.diffusion}
                    precision={this.props.precision}
                    generatedby={this.props.generatedby}
                    authorizedby={this.props.authorizedby}
                    reference={this.props.reference}
                    date={this.props.date}
                    period={this.props.period}
                    place={this.props.place}
                    print={this.props.print}
                        />
            </ExpansionPanelDetails>
        )
    }
}

