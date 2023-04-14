import { GET_PETS } from './types';

const initialState = {
  pets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload
      };
    default: {
      return {
        ...state,
      };
    }
  }
};


export default reducer
