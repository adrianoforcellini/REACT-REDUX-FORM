// import { combineReducers } from 'redux';

const INITIAL_STATE = {
  name: "",
  email: "",
  CPF: "",
  adress: "",
  city: "",
  house: false,
  apartment: false,
  emprego: "",
  descricaoDeEmprego: "",
  curriculo: "",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.name };
    case "CHANGE_EMAIL":
      return { ...state, email: action.email };
    case "CHANGE_CPF":
      return { ...state, CPF: action.CPF };
    case "CHANGE_ADRESS":
      return { ...state, adress: action.adress };
    case "CHANGE_CITY":
      return { ...state, city: action.city };
    case "CHECK_HOUSE":
      return { ...state, house: action.house, apartment: false };
    case "CHECK_APARTMENT":
      return { ...state, apartment: action.apartment, house: false};
    case "CHANGE_DESCRIÇÃO_EMAIL":
      return { ...state, descricaoDeEmprego: action.descricaoDeEmprego };
    case "CHANGE_EMPREGO":
      return { ...state, emprego: action.emprego };
    case "CHANGE_CURRICULO":
      return { ...state, curriculo: action.curriculo };
    default:
      return state;
  }
}
// const rootReducer = combineReducers(reducer)

// export default rootReducer
