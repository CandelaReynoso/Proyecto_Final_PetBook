import axios from "axios";
import {
  GET_PETS,
  FETCH_PET_DETAIL_SUCCESS,
  GET_PETS_RAMDON_HOME,
  SEND_EMAIL

} from "./types";

export const getPets = (params, page) => async (dispatch) => {
 
  try {
<<<<<<< HEAD
    const res = await axios.get("/pets/name?");
    dispatch({
      type: GET_PETS,
      payload: res.data,
    });
=======
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
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950
  } catch (err) {
    window.alert(err.message);
  }
};
 








<<<<<<< HEAD
  return async function (dispatch) {
   const response = await  axios.get(`/pets/name?name=${name}`)
   console.log(response.data);
   return dispatch({
   type : GET_PET_BY_NAME,
   payload : response.data
   })
  };
};

export const getPetsRandom = () => {
  return async function (dispatch) {
    const largePets = await axios.get("/pets/name?");
    //peticion para poder tener la propiedad count de largePets.data
    //count es la cantidad total de objetos es como el .length de un array
    //esta propiedad viene asi por la paginacion hecha con sequelize del back
    // las propiedades/objetos/pets vienen en una propiedad llamada rows
    //tip siempre hacer console log a la response .data de cualquier actions para entender
    //que es lo que te esta llegando
    //pd no entren en panico analisen las cosas siempre

    const response = await axios.get(
      `/pets/name?page=${Math.floor(
=======

export const getPetsRandom = () => {
  return async function (dispatch) {
    const largePets = await axios.get("http://localhost:3001/pets");
    const response = await axios.get(
      `http://localhost:3001/pets?page=${Math.floor(
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950
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
<<<<<<< HEAD
    const res = await axios.post(`/users`, userData);
    
=======
    const res = await axios.post(`http://localhost:3001/users`, userData);

>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950
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








