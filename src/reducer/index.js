// import { combineReducers } from 'redux';

const INITIAL_STATE = {
  Nome: "",
  Email: "",
  CPF: "",
  Cidade: "",
  Endereço : "",
  Estado: "",
  Casa: false,
  Apartamento: false,
  Emprego: "",
  Descrição_do_Emprego : "",
  Currículo: "",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, Nome: action.Nome };
    case "CHANGE_EMAIL":
      return { ...state, Email: action.Email };
    case "CHANGE_CPF":
      return { ...state, CPF: action.CPF };
    case "CHANGE_ADRESS":
      return { ...state, Endereço: action.Endereço };
    case "CHANGE_CITY":
      return { ...state, Cidade: action.Cidade };
    case "CHECK_HOUSE":
      return { ...state, Casa: action.Casa, Apartamento: false };
    case "CHECK_APARTMENT":
      return { ...state, Apartamento: action.Apartamento, Casa: false };
    case "CHANGE_DESCRIÇÃO_EMPREGO":
      return { ...state, Descrição_do_Emprego: action.Descrição_do_Emprego };
    case "CHANGE_EMPREGO":
      return { ...state, Emprego: action.Emprego };
    case "CHANGE_CURRICULO":
      return { ...state, Currículo: action.Currículo };
    case "CHANGE_LOCATION":
      return { ...state, Estado: action.Estado };
    default:
      return state;
  }
}
// const rootReducer = combineReducers(reducer)

// export default rootReducer
