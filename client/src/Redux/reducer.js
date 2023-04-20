<<<<<<< HEAD
import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,GET_PET_BY_NAME,} from './types';
=======
import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,GET_PET_BY_NAME,SEND_EMAIL} from './types';
>>>>>>> PB-83

const initialState = {
  pets: [],
  petsRandomHome :[],
  pet:{},

  loginForm:{
    email: '',
    password: '',
  },
<<<<<<< HEAD
=======
  formSubmitted: false,  //enviado de formulario de registro

  //Form de Contacto
loading: false,
success: null,
error: null
>>>>>>> PB-83

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
<<<<<<< HEAD
      // case UPDATE_LOGIN_FORM:
      //   return {
      //     ...state,
      //     ...action.payload
      //   }
=======
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
>>>>>>> PB-83
      
    default: {
      return {
        ...state,
      };
    }
  }
};



export default reducer
