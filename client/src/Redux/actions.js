import axios from 'axios'
import {GET_PETS,FETCH_PET_DETAIL_SUCCESS} from "./types"

    export const getPets = () => async dispatch => {
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
      };
