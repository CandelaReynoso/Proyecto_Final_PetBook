import axios from "axios";
import {
  GET_PETS,
  FETCH_PET_DETAIL_SUCCESS,
  GET_PETS_RAMDON_HOME,

} from "./types";

export const getPets = (params, page) => async (dispatch) => {
  console.log(params);
  console.log(page);
  try {
    if (params) {
      const res = await axios.get(`http://localhost:3001/pets${params}`);
      if(res.data.data.length === 0){
       window.alert("ops algo salio mal")
       return
      }
      return dispatch({
        type: GET_PETS,
        payload: res.data,
      });
    }
    // if (params && page) {
    //   const res = await axios.get(`http://localhost:3001/pets${params}&page=${page}`);
    //   return dispatch({
    //     type: GET_PETS,
    //     payload: res.data,
    //   });
    // }
    if (!params && !page) {
      const res = await axios.get(`http://localhost:3001/pets`);
      return dispatch({
        type: GET_PETS,
        payload: res.data,
      });
    }
  } catch (err) {
    window.alert(err.message);
  }
};
 







// export const getPetsByName = (params,page) => {

//   return async function (dispatch) {
//     try {
//       if (params) {
//         const response = await axios.get(`http://localhost:3001/pets${params}`

//          )

//         return dispatch({
//           type: GET_PET_BY_NAME,
//           payload: response.data,
//         });
//       }
//       if(params && page){
//       const response = await axios.get(`http://localhost:3001/pets${params}&page=${page}`)

//       return dispatch({
//         type: GET_PET_BY_NAME,
//         payload: response.data,
//       });
//     }
//     } catch (error) {
//       window.alert(error.message);
//     }
//   };
// };

export const getPetsRandom = () => {
  return async function (dispatch) {
    const largePets = await axios.get("http://localhost:3001/pets");
    const response = await axios.get(
      `http://localhost:3001/pets?page=${Math.floor(
        (Math.random() * largePets.data.count) / 2
      )}&pageSize=2`
    );
    return dispatch({
      type: GET_PETS_RAMDON_HOME,
      payload: response.data.data,
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
  console.log(userData);
  try {
    const res = await axios.post(`http://localhost:3001/users`, userData);

    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
};


// export const updateLoginForm = (formData) => {
//   return {
//     type: UPDATE_LOGIN_FORM,
//     payload: formData,
//   };
// };











