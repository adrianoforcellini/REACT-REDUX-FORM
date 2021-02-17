import React, { Component } from 'react';
import store from '../store/index';

class Button extends Component {
    createButton(){
      
      return (
        <button onClick={handleSubmit}>
          Enviar Dados
         </button>
      );
    }
    

    render() {

        return (
        <div className="button">
       {this.createButton() }
           <div id="print"></div>
            </div>
        );
    }
}

// function tick() {
//   let element = (
//     <div>
//       <h1>Hello, world!</h1>
//          </div>
//   );
  // element = document.getElementById('as').appendChild(element);
//   let a = document.getElementById('as');
// element = a.appendChild(element)
// }

function handleSubmit() {
    let print = store.getState()
    console.log(print)
     let div = document.getElementById("print");
      div.innerHTML = `<p> ${Object.keys(print)[0].toString()} : ${Object.values(print)[0].toString()} </p> <br>
                    <p>  ${Object.keys(print)[1].toString()} : ${Object.values(print)[1].toString()} </p> <br>  
                    <p> ${Object.keys(print)[2].toString()} : ${Object.values(print)[2].toString()} </p> <br>  
                    <p> ${Object.keys(print)[3].toString()} : ${Object.values(print)[3].toString()} </p> <br> 
                    <p> ${Object.keys(print)[4].toString()} : ${Object.values(print)[4].toString()} </p> <br> 
                    <p> ${Object.keys(print)[5].toString()} : ${Object.values(print)[5].toString()} </p>  <br>
                    <p> ${Object.keys(print)[6].toString()} : ${Object.values(print)[6].toString()} </p> <br> 
                    <p> ${Object.keys(print)[7].toString()} : ${Object.values(print)[7].toString()} </p> <br>
                    <p> ${Object.keys(print)[8].toString()} : ${Object.values(print)[8].toString()} </p> <br>
                    <p> ${Object.keys(print)[9].toString()} : ${Object.values(print)[9].toString()} </p> <br> 
                    <p> ${Object.keys(print)[10].toString()} :  ${Object.values(print)[10].toString()} </p> <br>`
     
}
  




export default Button;
