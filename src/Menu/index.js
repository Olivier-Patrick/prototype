import React,{Component } from 'react'
import SwitchExample from './sw'
import axios from 'axios';

var SuperValue=[0,0,0,0,0,0,0]
var idSupervalue=0



export { idSupervalue };
export { SuperValue };

var intervalID = setInterval(function(){

  const url = `http://localhost:3000/rest2`;
     
  
              
        axios
        .get(url)
        .then(res =>{
          console.log(res.data)
          SuperValue=res.data
        } )
           
          
            
            
  //
  //alert("Interval reached");
}, 7000);


function HandleSvalue(x){
    switch (x) {
        case 'EnergieSolaire':
        
          return 0;
          break;
        case 'Energie Réseau':
            return 1;

        case 'Eau recyclée':
            return 2;

          
         
          break;
          case'Eau Potable':
          return 3;
        case 'Energie Eclairage':
        
        return 4;  
        case 'Energie CVC':
        
          return 5; 
          case 'Energie Prises':
        
            return 6; 
        default:
          console.log(SuperValue);
      }
      
}

export {  HandleSvalue};
 



export default class Menu extends Component{


    
    HandleInputChange=(event,id)=>{
       event.preventDefault()
     console.log(event.target.value)
     idSupervalue= HandleSvalue(event.target.name)
    // for (let i = 0; i < 7; i++) {
     
     //SuperValue[i] = SuperValue[i];
     SuperValue[0] = SuperValue[0];
     SuperValue[1]= SuperValue[1];
     SuperValue[2]= SuperValue[2];
     SuperValue[3]= SuperValue[3];
     SuperValue[4]= SuperValue[4];
     SuperValue[5]= SuperValue[5];
     SuperValue[6]= SuperValue[6];
    //}
    SuperValue[idSupervalue] =event.target.value;
              
     console.log(SuperValue)
    }
    
    handleSubmit=(event) =>{
      
      event.preventDefault();
     // fetch('http://localhost:3000/test', {
        fetch('http://localhost:3000/test', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          atrib: SuperValue ,
          a:"123"
        
        })
      })
    
     // envoyer variable//
    }
    /// ////////////////////////////////////////////////////////

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <div class="w3-container w3-green"> 
                <h2>admin space </h2>    </div>
                
                <br/>
                <input type="submit" value="Envoyer" />

<br/>
<br/>
<br/>
<SwitchExample id="EnergieSolaire" style={{ marginLeft:90}}/>
<br/>
<br/>
                
                Energie Photovoltaique
             <input  name ="EnergieSolaire"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:34}} onChange={this.HandleInputChange} id="0" />

     
            <br />
            Energie du Réseau
            
            <input  name ="Energie Réseau"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:60}} onChange={this.HandleInputChange} id="1"/>

  
            <br />
            Eau recyclée
            <input  name ="Eau recyclée"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:97}} onChange={this.HandleInputChange} id="2"/>

            <br />
            Eau Potable
            <input name ="Eau Potable"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:104}} onChange={this.HandleInputChange} id="3"/>

            <br />
 
            Energie Eclairage
             <input  name ="Energie Eclairage"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:67}} onChange={this.HandleInputChange} id="4" />
             <br />
             Energie CVC
             <input  name ="Energie CVC"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:97}} onChange={this.HandleInputChange} id="5" />
             <br />
             Energie Prises électriques
             <input  name ="Energie Prises"style={{height: 40, borderColor: 'gray', borderWidth: 1,marginLeft:17}} onChange={this.HandleInputChange} id="6" />

   </form>
                
        
        )
    }


 }







