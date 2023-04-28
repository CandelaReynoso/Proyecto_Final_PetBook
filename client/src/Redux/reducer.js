

import { GET_PETS,FETCH_PET_DETAIL_SUCCESS,GET_PETS_RAMDON_HOME,SEND_EMAIL,SEND_ADOPTION_REQUEST,GET_PET_NAME, SET_PET_NAME,GET_PRODUCTS,ADD_FAVORITE,DELETE_FAVORITE, GET_FAVORITES, GET_USERS} from './types';



const initialState = {
  adoptionRequest: null,
  error: null,


  petsRandomHome :[],
  pet:{},
  namePets : [],
  favorites: [],
  pets:[],


  profile: {
    //perfil de usuario
    nickname: "",
  },

  loginForm: {
    email: "",
    password: "",
  },
  formSubmitted: false, //enviado de formulario de registro

  //Form de Contacto
loading: false,
success: null,
error: null,

products: [],


  users :[]

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
      };
    case FETCH_PET_DETAIL_SUCCESS:
      return {
        ...state,
        pet: action.payload,
      };
    case GET_PETS_RAMDON_HOME:
      return {
        ...state,
        petsRandomHome: action.payload,
      };

    case GET_PET_NAME:
      return {
        ...state,
        namePets: action.payload,
      };

    case SET_PET_NAME:
      return {
        ...state,
        namePets: [],
      };

    case SEND_EMAIL:
      if (action.error) {
        return {
          ...state,
          loading: false,
          success: null,
          error: action.error,
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
            
          case GET_PRODUCTS:
            return {
              ...state,
              products: action.payload
            };

              
          case GET_USERS:
              return{
              ...state,
              users : action.payload
              }

              case ADD_FAVORITE:
                const newFavorite = {
                  id: action.payload.id,
                  image: action.payload.image,
                  name: action.payload.name,
                  specie: action.payload.specie,
                  gender: action.payload.gender,
                  size: action.payload.size,
                  weight: action.payload.weight,
                  age: action.payload.age,
                  users: [{ id: action.payload.idUser }]
                };
                return {
                  ...state,
                  favorites: [...state.favorites, newFavorite]
                };
              
                
           case DELETE_FAVORITE:
                  const { idPet, idUser } = action.payload;
                  const updatedFavorites = state.favorites.filter(favorite => {
                    const parsedFavorite = JSON.parse(favorite);
                    return parsedFavorite.id !== idPet || 
                           parsedFavorite.users[0].id !== idUser;
                  });
                  return { 
                    ...state, 
                    favorites: updatedFavorites 
                  };

         case GET_FAVORITES:
          return {
         ...state,
            favorites: action.payload,
           };
    
          default: {
            return {
              ...state,
            };
    }
  }
};



export default reducer

