import {
  GET_ABOGADO,
  GET_ALL_ABOGADOS,
  GET_ALL_LICENCIAS,
  GET_LICENCIA,
  GET_FERIADOS,
  DELETE_LICENCIA,
  CLEAR_DETAILS_ABOGADO,
  CLEAR_DETAILS_LICENCIA,
  DELETE_ABOGADO,
  GET_ABOGADO_BY_NAME,
} from "../actions";

const initialState = {
  allAbogados: [],
  abogadoDetails: {},
  licenciaDetails: {},
  allLicencias: [],
  allFeriados: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ABOGADOS:
      return {
        ...state,
        allAbogados: action.payload,
        abogados: action.payload,
      };
    case GET_ABOGADO:
      return {
        ...state,
        abogadoDetails: action.payload,
      };
    case GET_LICENCIA:
      return {
        ...state,
        licenciaDetails: action.payload,
      };
    case GET_ALL_LICENCIAS:
      return {
        ...state,
        allLicencias: action.payload,
      };
    case GET_FERIADOS:
      return {
        ...state,
        allFeriados: action.payload,
      };
    case DELETE_LICENCIA:
      const updateLicencias = state.allLicencias.filter(
        (a) => a.id !== action.payload
      );
      return {
        ...state,
        allLicencias: updateLicencias,
      };
    case DELETE_ABOGADO:
      const updateAbogado = state.allAbogados.filter(
        (a) => a.id !== action.payload
      );
      console.log(updateAbogado);
      return {
        ...state,
        abogado: updateAbogado,
      };
    case GET_ABOGADO_BY_NAME:
      return {
        ...state,
        abogados: action.payload,
      };
    case CLEAR_DETAILS_ABOGADO:
      return {
        ...state,
        abogadoDetails: action.payload,
      };
    case CLEAR_DETAILS_LICENCIA:
      return {
        ...state,
        licenciaDetails: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
