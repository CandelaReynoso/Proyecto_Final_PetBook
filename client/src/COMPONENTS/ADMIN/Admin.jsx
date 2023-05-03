import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  aplicationRequest,
  getApprovedHistory,
  getDeclinedHistory,
  getUsers,
  historysRequest,
} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import TablaUsers from "./TablaUsers";
import { FaBell, FaBellSlash } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";

import axios from "axios";

const Admin = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [donaciones, setDonaciones] = useState("");

  useEffect(() => {
    dispatch(getApprovedHistory());
    dispatch(getDeclinedHistory());
  }, []);

  useEffect(() => {
    async function donaciones() {
      let response = await axios.get("/donations");
      setDonaciones(response.data);
    }
    donaciones();
  }, []);
  
  console.log(donaciones);

  useEffect(() => {
    dispatch(getUsers());
  }, [getUsers]);

  useEffect(() => {
    dispatch(aplicationRequest());
    dispatch(historysRequest());
  }, []);

  const deleteLogicUser = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(`/users/${id}`, {
        headers: { "Content-Type": "application/json", "x-token": token },
      });

      window.alert("usuario eliminado con exito");
      dispatch(getUsers());
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div>
      <aside className="ml-[-100%] fixed overflow-scroll z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
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
            <h5 className=" mt-4 text-xl font-semibold text lg:block">
              Mario Pérez
            </h5>
            <span className=" text lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {/* <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <span className="group-hover:text-gray-700">
                  Publicar productos
                </span>
              </a>
            </li> */}
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <Link to={"/acceptStories"}>
                  <span className="group-hover:text-gray-700">
                    Adoption Stories
                  </span>
                </Link>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
              >
                <Link to={"/AplicationRequest"}>
                  <span className="group-hover:text-gray-700">
                  Adoption Requests
                  </span>
                </Link>
              </a>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <Link to={"/FormCreatePet"}>
                <span className="group-hover:text-gray-700">
                Post Pet
                </span>
              </Link>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <Link to={"/CategoryForm"}>
                <span className="group-hover:text-gray-700">
                Create Category
                </span>
              </Link>
            </li>
            <li className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
              <Link to={"/ProductForm"}>
                <span className="group-hover:text-gray-700">
                Create Product
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* LOGOUT */}
        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <a href='/home' className="group-hover:text-gray-700">Home</a>
          </button>
        </div>
      </aside>

      {/* HEADER ADMIN */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              ADMIN DASHBOARD
            </h5>
                   
            {/* dropDown */}

            <div className="navbar- dropdown ">
              <ul className="menu menu-horizontal px-1 ">
                <li tabIndex={0}>
                  {state.requestAdoption.length ||
                  state.historysRequest.length ? (
                    <a>
                      <FaBell />
                    </a>
                  ) : (
                    <a>
                      <FaBellSlash />
                    </a>
                  )}

                  <ul className="menu dropdown-content p-2 bg-base-100 w-56 rounded-box text group-hover:bg-primary">
                    <li className="text-1xl text-gray-600 font-medium lg:block">
                      <Link to={"/acceptStories"}>
                        Storys requests{" "}
                        {" " + ":" + " " + state?.historysRequest.length}
                      </Link>
                    </li>

                    <li className="text-1xl text-gray-600 font-medium lg:block">
                      <Link to={"/AplicationRequest"}>
                        adoption applications{" "}
                        {" " + ":" + " " + state?.requestAdoption.length}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4"></div>
          </div>
        </div>
        <p className="italic m-4 text-red-800">For a better experience, remember to use this page from your computer</p>
        <div className="px-6 pt-6 2xl:container ">
          <div>
            {/* ***************************** */}
            {/* COLUMNA 1 USUARIOS */}
            <div className="md:col-span-2 lg:col-span-1 m-2">
              <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white">
                <div>
                  <h5 className="text-xl text uppercase text-center">
                  Registered Users
                  </h5>

                  <table className="w-full text">
                    <tbody className="text">
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
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white m-2">
                <h5 className="text-xl text uppercase text-center">Current Donations</h5>
                <div className="my-8">
                  <h1 className="text-5xl font-bold text-gray-800">$ { donaciones}</h1>
                  <span className="text-gray-500">
                  Total amount of donations
                  </span>
                </div>
              </div>
            </div>
            {/* ***************************** */}

            {/* COLUMNA 3 */}
            <div>
              <div className="h-full py-6 px-6 rounded-xl border border-gray-200 bg-white m-2">
                <h5 className="text-xl text uppercase text-center">
                  Adoption Applications History
                </h5>

                <div className="overflow-x-auto">
                  <table className="table table-compact w-full">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody className="text">
                      <h2 className="text">APPROVED</h2>
                      {state?.requesAdoptionHistorialApproved?.adoptions?.map(
                        (request, index) => {
                          return (
                            <tr>
                              <th>{index + 1}</th>
                              <td>name</td>
                              <td>{request.name}</td>
                              <td>email</td>
                              <td>{request.email}</td>
                              <td>status</td>
                              <td>{request.status}</td>
                            </tr>
                          );
                        }
                      )}
                      <h2 className="text mt-2">DECLINED</h2>
                      {state?.requesAdoptionHistorialDeclined?.adoptions?.map(
                        (request, index) => {
                          return (
                            <tr className="text">
                              <th>{index + 1}</th>
                              <td>name</td>
                              <td>{request.name}</td>
                              <td>email</td>
                              <td>{request.email}</td>
                              <td>status</td>
                              <td>{request.status}</td>
                            </tr>
                          );
                        }
                      )}
                    </tbody>
                  </table>
                </div>
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
