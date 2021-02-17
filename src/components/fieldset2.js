import React, { Component } from "react";
import { connect } from "react-redux";

class Fieldset2 extends Component {
  inputCurriculum() {
    return (
      <label htmlFor="InputCurriulum">
        Curriculo :
        <textarea
          onChange={({ target }) => this.props.Currículo(target.value)}
          maxLength="1000"
          required
        />
      </label>
    );
  }

  inputEmployment() {
    return (
      <label htmlFor="InputEmployment">
        Cargo :
        <textarea
          onChange={({ target }) => this.props.Emprego(target.value)}
          maxLength="40"
          required
        />
      </label>
    );
  }

  inputEmploymentDescription() {
    return (
      <label htmlFor="InputEmploymentDescription">
        Descrição do Cargo :
        <textarea
          onChange={({ target }) => this.props.Descrição_do_Emprego(target.value)}
          maxLength="500"
          required
        />
      </label>
    );
  }

  render() {
    return (
      <fieldset className="Fieldset">
        {this.inputCurriculum()}
        {this.inputEmployment()}
        {this.inputEmploymentDescription()}
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  Currículo: state.Currículo,
  Descrição_do_Emprego: state.Descrição_do_Emprego,
  Emprego: state.Emprego,
 });


const mapDispatchToProps = (dispatch) => ({
  Currículo: (Currículo) => dispatch({ type: "CHANGE_CURRICULO", Currículo }),
  Descrição_do_Emprego: (Descrição_do_Emprego) => dispatch({ type: "CHANGE_DESCRIÇÃO_EMPREGO", Descrição_do_Emprego }),
  Emprego: (Emprego) => dispatch({ type: "CHANGE_EMPREGO", Emprego }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset2);
