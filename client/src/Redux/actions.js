import axios from "axios";
import {
  GET_PETS,
  FETCH_PET_DETAIL_SUCCESS,
  GET_PETS_RAMDON_HOME,
  GET_PET_BY_NAME
} from "./types";

export const getPets = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:3001/pets/name?");
    dispatch({
      type: GET_PETS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const getPetsByName = (name) => {

  return async function (dispatch) {
   const response = await  axios.get(`http://localhost:3001/pets/name?name=${name}`)
   console.log(response.data);
   return dispatch({
   type : GET_PET_BY_NAME,
   payload : response.data
   })
  };
};

export const getPetsRandom = () => {
  return async function (dispatch) {
    const largePets = await axios.get("http://localhost:3001/pets/name?");
    //peticion para poder tener la propiedad count de largePets.data
    //count es la cantidad total de objetos es como el .length de un array
    //esta propiedad viene asi por la paginacion hecha con sequelize del back
    // las propiedades/objetos/pets vienen en una propiedad llamada rows
    //tip siempre hacer console log a la response .data de cualquier actions para entender
    //que es lo que te esta llegando
    //pd no entren en panico analisen las cosas siempre

    const response = await axios.get(
      `http://localhost:3001/pets/name?page=${Math.floor(
        (Math.random() * largePets.data.count) / 2
      )}&size=2`
    );

    return dispatch({
      type: GET_PETS_RAMDON_HOME,
      payload: response.data.rows,
    });
  };
};

export const fetchPetDetailSuccess = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/pets/detail/${id}`);
    dispatch({
      type: FETCH_PET_DETAIL_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.error(err);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:3001/users/`, userData); // Cambiar la URL de la petición POST
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};

/*   export const getPets = () => async dispatch => {
        try {
          const res = await axios.get('http://localhost:3001/pets');
          dispatch({
            type: GET_PETS,
            payload: res.data
          });
        } catch (err) {
          console.error(err);
        }
      };
   
       export const fetchPetDetailSuccess = (id) => async (dispatch) => {
        try {
          const res = await axios.get(`http://localhost:3001/pets/detail/${id}`);
          dispatch({
            type: FETCH_PET_DETAIL_SUCCESS,
            payload: res.data,
          });
        } catch (err) {
          console.error(err);
        }
      }; */
