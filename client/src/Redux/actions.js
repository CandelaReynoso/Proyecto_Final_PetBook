import axios from "axios";
import {
  GET_PETS,
  FETCH_PET_DETAIL_SUCCESS,
  GET_PETS_RAMDON_HOME,
  SEND_EMAIL

} from "./types";

export const getPets = (params, page) => async (dispatch) => {
 
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
    const res = await axios.get(`/pets/detail/${id}`);
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

// Acción que maneja los emails que se envian al admin a traves del FORMCONTACT
//con promesa
export const sendEmail = (name, lastname, email, message) => {
  return new Promise((resolve, reject) => {
    try {
      const tokenString = localStorage.getItem('token');
      console.log('tokenString:', tokenString); // add this line
      //const token = JSON.parse(tokenString);
      //if (!tokenString) {
      //  throw new Error('No token found in localStorage');
      //}
      const headers = { 
        'Content-Type': 'application/json',
        'x-token': tokenString // add this line
      };
      console.log('headers:', headers); // add this line
      axios.post('http://localhost:3001/contact', {
        name,
        lastname,
        email,
        message
      }, { headers })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response.data);
        });
    } catch (error) {
      reject(error);
    }
  });
}








