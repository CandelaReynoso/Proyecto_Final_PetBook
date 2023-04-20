import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,GET_PET_BY_NAME,SEND_EMAIL} from './types';

const initialState = {
  pets: [],
  petsRandomHome :[],
  pet:{},

  loginForm:{
    email: '',
    password: '',
  },
  formSubmitted: false,  //enviado de formulario de registro

  //Form de Contacto
loading: false,
success: null,
error: null

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload
      };
      case FETCH_PET_DETAIL_SUCCESS:
      return {
        ...state,
        pet: action.payload
      }
      case GET_PETS_RAMDON_HOME:
      return{
      ...state,
      petsRandomHome: action.payload
      }
      case GET_PET_BY_NAME:
      return{
      ...state,
      pets: action.payload
      }
      case SEND_EMAIL:
          if (action.error) {
          return {
          ...state,
          loading: false,
          success: null,
          error: action.error
          };
          } else {
          return {
          ...state,
          loading: false,
          success: action.payload,
          error: null
          };
          }
      
    default: {
      return {
        ...state,
      };
    }
  }
};



export default reducer
