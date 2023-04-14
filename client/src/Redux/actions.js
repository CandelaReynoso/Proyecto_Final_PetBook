import axios from 'aixos'
import {GET_PETS} from "./types"

export function getPets() {
    return async function(dispatch) {
      let json = await axios.get("http://localhost:3001/pets");
      return dispatch({
        type: GET_PETS,
        payload: json.data
      });
    };
  }