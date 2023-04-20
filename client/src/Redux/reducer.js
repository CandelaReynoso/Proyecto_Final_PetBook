
import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME} from './types';




const initialState = {
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

      
    default: {
      return {
        ...state,
      };
    }
  }
};


export default reducer
