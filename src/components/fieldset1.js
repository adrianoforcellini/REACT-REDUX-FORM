import React, { Component } from "react";
import { connect } from "react-redux";

class Fieldset1 extends Component {


  inputName() {
    return (
      <label htmlFor="InputName">
        Nome :
        <input
          type="text"
          onChange={({ target }) => this.props.Nome(target.value)}
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
          onChange={({ target }) => this.props.Email(target.value)}
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
          onChange={({ target }) => this.props.Endereço(target.value)}
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
          onChange={({ target }) => this.props.Cidade(target.value)}
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
          onClick={({ target }) => this.props.Casa(target.checked)}
          />
        Casa
        <input
          type="radio"
          name="house"
          onClick={({ target }) => this.props.Apartamento(target.checked)}
        />
        Apartamento
      </div>
    );
  }

inputState() {
  return (
   <select onChange={({ target }) => this.props.Estado(target.value)}
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
        {this.inputCity()}
        {this.inputAdress()}
        {this.inputState()}
        {this.radioHouse()}
      </fieldset>
    );
  }
  ;
}

// short hand object JS => procurar no MDN
const mapStateToProps = (state) => ({
  Nome: state.Nome,
  Email: state.Email,
  CPF: state.CPF,
  Endereço: state.Endereço,
  Cidade: state.Cidade,
  house: state.house,
  apartment: state.apartment,
  Estado: state.Estado
});


const mapDispatchToProps = (dispatch) => ({
  Nome: (Nome) => dispatch({ type: "CHANGE_NAME", Nome }),
  Email: (Email) => dispatch({ type: "CHANGE_EMAIL", Email }),
  CPF: (CPF) => dispatch({ type: "CHANGE_CPF", CPF }),
  Cidade: (Cidade) => dispatch({ type: "CHANGE_CITY", Cidade  }),
  Endereço: (Endereço) => dispatch({ type: "CHANGE_ADRESS", Endereço }),
  Casa: (Casa, Apartamento) => dispatch({ type: "CHECK_HOUSE", Casa, Apartamento }),
  Apartamento: (Apartamento, Casa) => dispatch({ type: "CHECK_APARTMENT", Apartamento, Casa }),
  Estado :(Estado) => dispatch({ type: "CHANGE_LOCATION", Estado }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset1);
