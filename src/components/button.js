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
       {input()}
            </div>
        );
    }
}

function handleSubmit(){
    vazio = store.getState();
    console.log(vazio)
  }



let vazio = "aaaa"

function input(){
  return (
    <div>
    {vazio}
     </div>
  );
}

export default Button;
