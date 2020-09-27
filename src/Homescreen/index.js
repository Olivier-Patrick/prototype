import React, { Component } from 'react';
import Slider from './Slider'
import { Timers } from '../Settings/Timers'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

let timer = 0

class Homescreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    timer = setTimeout(() => {
      if (!this.props.admin.status)
        this.props.history.push(`/indicators`)

    }, Timers.homescreen)
    
  }

  componentWillUnmount() {
    clearTimeout(timer)

  }

  render() {
    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }} >
        <Slider />
        {/* <Card // title=""
          content={
            <div style={{ flex: 1 }} />
          }
        /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homescreen)
