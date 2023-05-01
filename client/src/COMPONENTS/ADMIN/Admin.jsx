import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { aplicationRequest, getUsers } from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TablaUsers from "./TablaUsers";
import { FaBell, FaBellSlash } from "react-icons/fa";

import axios from "axios";

const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  useEffect(() => {
    dispatch(aplicationRequest());
    console.log(state?.requestAdoption.length);
  }, []);

  const deleteLogicUser = async (id) => {
    try {
      let totalUsers = state?.users?.users?.length;
      await axios.delete(`/users/:${id}`);
      let currentUsers = state?.users?.users?.length;
      if ((totalUsers = currentUsers)) {
        window.alert("algo salio mal");
      } else {
        window.alert("usuario eliminado con exito");
        dispatch(getUsers());
      }
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="/home" title="home">
              <img src="/logo.png" alt="" width="200rem" />
            </a>
          </div>

          <div className="mt-8 text-center">
            <img
              src="https://pxb.cdn.0221.com.ar/0221/042023/1681735734694.jpg"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
              pepito
            </h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span className="group-hover:text-gray-700">
                  publicar productos
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span className="group-hover:text-gray-700">
                  Historias de Adopcion
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <Link to={"/AplicationRequest"}>
                  <span className="group-hover:text-gray-700">
                    Solicitudes de Adopcion
                  </span>
                </Link>
              </a>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <Link to={"/FormCreatePet"}>
                <span className="group-hover:text-gray-700">
                  Publicar Mascota
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>

      {/* HEADER ADMIN */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              DashBoard
            </h5>

            {/* dropDown */}

            <div className="navbar- dropdown ">
              <ul className="menu menu-horizontal px-1 ">
                <li tabIndex={0}>
                  {state.requestAdoption.length ? (
                    <a>
                      <FaBell />
                    </a>
                  ) : (
                    <a>
                      <FaBellSlash />
                    </a>
                  )}

                  <ul className="menu dropdown-content p-2 bg-base-100 w-56 rounded-box text group-hover:bg-primary">
                    <li>Storys requests</li>
                    <li className="text-1xl text-gray-600 font-medium lg:block">
                    <Link to={"/AplicationRequest"}>
                    adoption applications{" "}
                      {" " + state?.requestAdoption.length}
                    </Link>
                    
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              {/* BOTON DE MENSAJES */}
              <button
                aria-label="chat"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg> */}
              </button>

              {/* CAMPANA DE NOTIFICACIONES */}
              <button
                aria-label="notification"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
              >
                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                    </svg> */}
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container ">
          <div>
            {/* ***************************** */}
            {/* COLUMNA 1 USUARIOS */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <h5 className="text-xl text-gray-600 text-center">
                    usuarios registrados
                  </h5>

                  <table className="w-full text-gray-600">
                    <tbody>
                      {/* gif pedorro provisorio */}
                      {!state.users.users ? (
                        <img src="https://media.tenor.com/1qrYT711uEoAAAAC/cargando.gif" />
                      ) : (
                        state?.users?.users?.map((user, index) => {
                          return (
                            <tr key={index}>
                              <TablaUsers
                                user={user?.nickname}
                                email={user?.email}
                                index={index}
                                id={user?.id}
                                deleteLogicUser={deleteLogicUser}
                              />
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ***************************** */}

            {/* COLUMNA 2 DONACIONES*/}
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">Donaciones</h5>
                <div className="my-8">
                  <h1 className="text-5xl font-bold text-gray-800">64,5%</h1>
                  <span className="text-gray-500">
                    Compared to last week $13,988
                  </span>
                </div>
              </div>
            </div>
            {/* ***************************** */}

            {/* COLUMNA 3 */}
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white">
                <h5 className="text-xl text-gray-700">otro dato</h5>
              </div>
            </div>
            {/* ***************************** */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
