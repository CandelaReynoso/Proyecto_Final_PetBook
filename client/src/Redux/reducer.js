import { GET_PETS,FETCH_PET_DETAIL_SUCCESS} from './types';

const initialState = {
  pets: [],
  pet:{},
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
    default: {
      return {
        ...state,
      };
    }
  }
};


export default reducer
