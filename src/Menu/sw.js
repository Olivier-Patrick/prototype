import React, { Component } from "react";
import Switch from "react-switch";
import{SuperValue} from './index'
 import{HandleSvalue} from "./index"
 import {flag} from "../APIRequests/index"


var i=0
function NaNfixe_test(a,indice){
if(a==-1){
  
    return SuperValue[indice]
}
else{
  
    return a
}

}
export{NaNfixe_test}



export default class SwitchExample extends Component {
  constructor() {
    super();
 this.state = { checked: flag };
 

  }
 

 
  render() {
    return (
      <label>
        <span></span>
        <Switch checked={this.state.checked} />
      </label>
    );
  }
}