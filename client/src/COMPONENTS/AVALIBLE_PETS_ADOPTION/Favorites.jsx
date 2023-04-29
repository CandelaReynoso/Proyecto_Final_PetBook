import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../Redux/actions";
import CardsFavorites from "./CardsFavorites";
import axios from "axios";

//componente contenedor de todo lo que se vaya a renderizar aca
const Favorites = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    let userId = window.localStorage.getItem("id");
    dispatch(getFavorites(userId));
  }, [dispatch]);

  const handlerDelete = async (id) => {
    try {
      let userId = window.localStorage.getItem("id");
      
      await axios.delete(`/favorite?idUser=${userId}&idPet=${id}`);
      dispatch(getFavorites(userId));
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div>
      {state.favorites && (
        <CardsFavorites
          favorites={state?.favorites}
          handlerDelete={handlerDelete}
        />
      )}
    </div>
  );
};

export default Favorites;
