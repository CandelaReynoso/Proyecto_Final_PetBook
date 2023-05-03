import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../Redux/actions";
import CardsFavorites from "./CardsFavorites";
import axios from "axios";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";

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

  const uniqueFavs = Array.from(
    new Map(state.favorites.map((fav) => [fav.petId, fav])).values()
  ); // la magia para q no se agreguen repetidos

  return (
    <div>
    {localStorage.getItem("token") ? (
              <HeaderLogin className="mb-4" />
            ) : (
              <Header className="mb-4" />
            )}
      {!uniqueFavs.length ? (
        <img className="mx-auto max-w-full h-auto block w-1/2" src="/perritoFavVacio.jpg" alt="perritoFav" />
      ) : (
        <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-screen">
          <div>
            
          </div>

          <h1 className="titleCenter">My favorites</h1>
          <div className="flex justify-center h-screen w-screen">
            <div className="grid grid-cols-1 h-fit">
              {uniqueFavs && (
                <CardsFavorites
                  favorites={uniqueFavs}
                  handlerDelete={handlerDelete}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-[12rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Favorites;
