
import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,SEND_EMAIL,SEND_ADOPTION_REQUEST} from './types';


const initialState = {
  adoptionRequest: null,
  error: null,

  pets: [],
  petsRandomHome :[],
  pet:{},

  profile: {           //perfil de usuario
    nickname: '',
  },

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
          case SEND_ADOPTION_REQUEST:
            return {
              ...state,
              adoptionRequest: action.payload,
              error: null,
            };
      
    default: {
      return {
        ...state,
      };
    }
  }
};



export default reducer
