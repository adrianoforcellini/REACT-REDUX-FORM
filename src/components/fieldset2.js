import React, { Component } from "react";
import { connect } from "react-redux";

class Fieldset2 extends Component {
  inputCurriculum() {
    return (
      <label htmlFor="InputCurriulum">
        Curriculo :
        <textarea
          onChange={({ target }) => this.props.curriculo(target.value)}
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
          onChange={({ target }) => this.props.emprego(target.value)}
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
          onChange={({ target }) => this.props.descricaoDeEmprego(target.value)}
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
  curriculo: state.curriculo,
  descricaoDeEmprego: state.descricaoDeEmprego,
  emprego: state.emprego,
 });

const mapDispatchToProps = (dispatch) => ({
  curriculo: (curriculo) => dispatch({ type: "CHANGE_CURRICULO", curriculo }),
  descricaoDeEmprego: (descricaoDeEmprego) => dispatch({ type: "CHANGE_DESCRIÇÃO_EMAIL", descricaoDeEmprego }),
  emprego: (emprego) => dispatch({ type: "CHANGE_EMPREGO", emprego }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Fieldset2);
