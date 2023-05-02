import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPets } from "../../Redux/actions";
import Cards from "../CARDS/Cards";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import SearchBar from "../SEARCH/SearchBar";
import Pagination from "../PAGINATION/Pagination";
import FilterAndOrder from "../FILTER_AND_ORDER/FilterAndOrder";
import SearchResultsList from "../SEARCH/SearchResultList";
import { createSearchParams } from "react-router-dom";
// import loadingGif from "../../../public/dog.loading2.gif";
import Loading from "../LOADING/Loading";
import { BiRefresh } from "react-icons/bi";

const AvaliblePetsAdoption = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
 
  useEffect(() => {
  
    let query = window.localStorage.getItem("lastQuerys");
    let parseQuery = JSON.parse(query);

    if (!query) {
      dispatch(getPets());
      return;
    }
    if (parseQuery !== undefined) {
      dispatch(getPets(`?${createSearchParams(parseQuery)}`));
    }
    if (parseQuery === undefined) {
      return;
    }
  }, [dispatch]);

  useEffect(() => {
    return () => {
      let querys = state?.pets?.params;

      if (querys !== undefined) {
        window.localStorage.setItem("lastQuerys", JSON.stringify(querys));
      } else return;
    };
  }, [state.pets.params]);
  

  const onclickRefresh = () => {
    
    dispatch(getPets())
  };

  return (
    <div className="w-screen">
      <div className="bg-[url('/backadopt.png')] bg-no-repeat w-screen">
        {/* HEADER */}
        <div>
          {localStorage.getItem("token") ? (
            <HeaderLogin className="mb-4" />
          ) : (
            <Header className="mb-4" />
          )}
        </div>

        {/* FILTRADO Y SEARCH  */}
        <div className="navbar border-black">
          <div className="">
            <FilterAndOrder />
            <button className="btn btn-xs" onClick={onclickRefresh}>
            <BiRefresh />
            </button>
          </div>

          <div className="hidden sm:block sm:ml-10">
            <SearchBar />
            <div className="">
              {state?.namePets?.length > 0 && <SearchResultsList />}
            </div>
          </div>

          <div className="sm:hidden">
            <SearchBar />
            <div className="">
              {state?.namePets?.length > 0 && <SearchResultsList />}
            </div>
          </div>
        </div>

        {/* VÍDEO DE CARGA */}
        {!state.pets.data && (
          <div className="flex justify-center items-center mt-9">
            {/* <div className="card card-side bg-base-100 shadow-xl p-2 m-3"> */}
              {/* <img
                src={loadingGif}
                alt="Loading..."
                className="w-[15rem] rounded-3xl"
              /> */}
              {/* <h1 className="text-2xl font-bold ml-4 text">LOADING...</h1> */}
              <Loading />
            {/* </div> */}
            
          </div>
        )}
        {/* CARTAS DE MASCOTAS */}
        { state.pets.data &&
          <div className="flex justify-center">
            <Cards pets={state?.pets?.data} />
          </div>
        }

        {/* PAGINADO */}
        <div>
          <Pagination />
        </div>

        {/* ADOPT AND SAVE A LIFE...  */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 ">
          <div className="flex items-center justify-end ">
            <p className="titleRight w-72 pr-6 ">
              Adopt today and change a life
            </p>
            <br />
            <p className="titleRight"> </p>
          </div>
          <div>
            <ul className="steps steps-vertical">
              <li className="step step-primary text text-neutral">Register</li>
              <li className="step step-primary text text-neutral">
                Find a friend you wish to take home
              </li>
              <li className="step text text-neutral">
                Go through our adoption requirements{" "}
              </li>
              <li className="step text text-neutral">
                Schedule a visit to the shelter
              </li>
              <li className="step text text-neutral">
                Meet your new furry friend and go home
              </li>
            </ul>
          </div>
        </div>

        {/* FOOTER */}

        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AvaliblePetsAdoption;
