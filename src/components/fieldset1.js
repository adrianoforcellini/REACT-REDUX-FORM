import React, { Component } from "react";
import { connect } from "react-redux";

class Fieldset1 extends Component {


  inputName() {
    return (
      <label htmlFor="InputName">
        Nome :
        <input
          type="text"
          onChange={({ target }) => this.props.name(target.value)}
          name="name"
          maxLength="40"
          required
        />
      </label>
    );
  }

  inputEmail() {
    return (
      <label htmlFor="InputEmail">
        E-mail :
        <input
          type="email"
          onChange={({ target }) => this.props.email(target.value)}
          name="email"
          maxLength="50"
          required
        />
      </label>
    );
  }

  inputCPF() {
    return (
      <label htmlFor="InputCPF">
        CPF :
        <input
          type="text"
          onChange={({ target }) => this.props.CPF(target.value)}
          name="CPF"
          maxLength="11"
          required
        />
      </label>
    );
  }

  inputAdress() {
    return (
      <label htmlFor="InputAdress">
        Endereço :
        <textarea
          name="adress"
          onChange={({ target }) => this.props.adress(target.value)}
          maxLength="200"
          required
        />
      </label>
    );
  }

  inputCity() {
    return (
      <label htmlFor="InputCity">
        Cidade :
        <input
          type="text"
          onChange={({ target }) => this.props.city(target.value)}
          name="city"
          maxLength="28"
          required
        />
      </label>
    );
  }

  radioHouse() {
    return (
      <div>
        <input
          type="radio"
          name="house"
          onClick={({ target }) => this.props.house(target.checked)}
          />
        Casa
        <input
          type="radio"
          name="house"
          onClick={({ target }) => this.props.apartment(target.checked)}
        />
        Apartamento
      </div>
    );
  }
inputState() {
  return (
   <select onChange={({ target }) => this.props.estado(target.value)}
    name="estados-brasil">
	<option value="AC">Acre</option>
	<option value="AL">Alagoas</option>
	<option value="AP">Amapá</option>
	<option value="AM">Amazonas</option>
	<option value="BA">Bahia</option>
	<option value="CE">Ceará</option>
	<option value="DF">Distrito Federal</option>
	<option value="ES">Espírito Santo</option>
	<option value="GO">Goiás</option>
	<option value="MA">Maranhão</option>
	<option value="MT">Mato Grosso</option>
	<option value="MS">Mato Grosso do Sul</option>
	<option value="MG">Minas Gerais</option>
	<option value="PA">Pará</option>
	<option value="PB">Paraíba</option>
	<option value="PR">Paraná</option>
	<option value="PE">Pernambuco</option>
	<option value="PI">Piauí</option>
	<option value="RJ">Rio de Janeiro</option>
	<option value="RN">Rio Grande do Norte</option>
	<option value="RS">Rio Grande do Sul</option>
	<option value="RO">Rondônia</option>
	<option value="RR">Roraima</option>
	<option value="SC">Santa Catarina</option>
	<option value="SP">São Paulo</option>
	<option value="SE">Sergipe</option>
	<option value="TO">Tocantins</option>
</select>)
}
  render() {
    return (
      <fieldset className="Fieldset">
        {this.inputName()}
        {this.inputEmail()}
        {this.inputCPF()}
        {this.inputAdress()}
        {this.inputState()}
        {this.inputCity()}
        {this.radioHouse()}
      </fieldset>
    );
  }
  ;
}

// short hand object JS => procurar no MDN
const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  CPF: state.CPF,
  adress: state.adress,
  city: state.city,
  house: state.house,
  apartment: state.apartment,
  estado: state.estado
});

const mapDispatchToProps = (dispatch) => ({
  name: (name) => dispatch({ type: "CHANGE_NAME", name }),
  email: (email) => dispatch({ type: "CHANGE_EMAIL", email }),
  CPF: (CPF) => dispatch({ type: "CHANGE_CPF", CPF }),
  city: (city) => dispatch({ type: "CHANGE_CITY", city  }),
  adress: (adress) => dispatch({ type: "CHANGE_ADRESS", adress }),
  house: (house, apartment) => dispatch({ type: "CHECK_HOUSE", house, apartment }),
  apartment: (apartment, house) => dispatch({ type: "CHECK_APARTMENT", apartment, house }),
  estado :(estado) => dispatch({ type: "CHANGE_LOCATION", estado }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset1);
