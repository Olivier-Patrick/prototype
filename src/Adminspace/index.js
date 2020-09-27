import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
// import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'

import { connect } from 'react-redux'
// import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/adminActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Adminspace extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    this.props.AdminON('hamza@hamza.hamza', '123456789')
  }

  render() {
    return (
      <div className="indicator">
        <Identity
          title={"Espace administrateur"}
          description={"Espace admin description ..."}
        />
        <div className="row-1" >
          <div className="el-1" style={{ padding: 200 }}>
            <Card title="Authentification"
              content={
                <div style={{ width: 700, height: 300, /*backgroundColor: this.props.admin ? 'orange' : 'limegreen' */ }} />
              }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adminspace)
