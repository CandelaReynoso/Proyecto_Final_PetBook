import axios from 'axios'
import {GET_PETS} from "./types"

    export const getPets = () => async dispatch => {
        try {
          const res = await axios.get('http://localhost:3001/pets/name?');
          dispatch({
            type: GET_PETS,
            payload: res.data
          });
        } catch (err) {
          console.error(err);
        }
      };
   