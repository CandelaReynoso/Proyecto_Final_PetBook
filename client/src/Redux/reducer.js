import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,GET_PET_BY_NAME,} from './types';

const initialState = {
  pets: [],
  petsRandomHome :[],
  pet:{},

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
      case GET_PET_BY_NAME:
      return{
      ...state,
      pets: action.payload
      }
      // case UPDATE_LOGIN_FORM:
      //   return {
      //     ...state,
      //     ...action.payload
      //   }
      
    default: {
      return {
        ...state,
      };
    }
  }
};


export default reducer
