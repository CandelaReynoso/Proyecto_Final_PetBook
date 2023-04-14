const initialState = {
  allPets: [],
  petsCopy:[],
  details: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PETS":
            return {
                ...state,
                allPets: action.payload,
                petsCopy: action.payload
            }
    default: {
      return {
        ...state,
      };
    }
  }
};


export default reducer
