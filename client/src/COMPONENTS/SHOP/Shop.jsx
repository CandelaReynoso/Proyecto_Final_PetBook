import React, { useEffect } from 'react';
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import {getAllProducts} from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import loadingGif from "../../../public/dog.loading2.gif";
import { useState } from 'react';
import Loading from "../LOADING/Loading";
import FilterProducts from './FilterProducts';


export default function Shop() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    dispatch(getAllProducts())
      .then(() => setIsLoading(false));
  }, [dispatch]);


  

  

   //Paginado
//  const indexOfLastProduct = currentPage * productsPerPage;
//  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//  const currentProducts = Array.isArray(products) && products.slice(indexOfFirstProduct, indexOfLastProduct);

//  const pageNumbers = [];
//  for (let i = 1; i <= Math.ceil(Array.isArray(products) && products.length / productsPerPage); i++) {
//    pageNumbers.push(i);
//  }

//  const handlePageClick = (event) => {
//    setCurrentPage(Number(event.target.id));
//  }

//  const goToNextPage = () => {
//    setCurrentPage(currentPage + 1);
//  }

//  const goToPrevPage = () => {
//    setCurrentPage(currentPage - 1);
//  }

//  const renderPageNumbers = pageNumbers.map(number => {
//    if (number === currentPage) {
//      return (
//        <div
//          key={number}
//          id={number}
//          onClick={handlePageClick}
//          className="btn btn-primary text-white text-lg font-bold mt-[0.18rem]">
//          {number}
//        </div>
//      )
//    } else if (number > currentPage - 1 && number < currentPage + 1) {
//      return (
//        <div
//          key={number}
//          id={number}
//          onClick={handlePageClick}
//          className="btn btn-ghost text-neutral text-lg font-bold mt-[0.18rem]">
//          {number}
//        </div>
//      )
//    } else {
//      return null;
//    }
//  })
 
  return (
    <div>
      <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
      <div>
  {localStorage.getItem('token') ? (
    <HeaderLogin className='mb-4'> 
    </HeaderLogin>
  ) : (
    <Header className='mb-4' />
  )}
</div>

<div>
  <FilterProducts />
</div>

        <div className="h-full w-screen">
          <div>
          <h1 className="titleLeft">SHOP ONLINE</h1>
          <p className='text p-4'>All proceeds from the purchase of these products go towards funding the NGO, and by buying these products, you are contributing to maintaining the health and well-being of the animals in the shelter.</p>
             {/* VÍDEO DE CARGA */}
        {isLoading && (
 <div class="flex justify-center items-center mt-9">
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
          </div>
          <div className="container mx-auto">
            {/* <h2 className="text-3xl font-bold mb-4">Choose a product! </h2> */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {state.products.products? state.products.products.map((product) => (
                  <div key={product.id} className="border p-4">
                    <img src={product.image} alt={product.name} className="mb-2 w-32" />
                    <h3 className="text-lg font-bold text">{product.name}</h3>
                    <p className='text text-xs'>{product.description}</p>
                    <p className="font-bold mt-2 text">${Math.ceil(product.price)}</p>
                    <form action="http://localhost:3001/checkout" method="GET">
                      <input type="hidden" name="title" value={product.name}/>
                      <input type="hidden" name="price" value={Math.ceil(product.price)}/>
                      <div className="card-actions justify-end"> 
                      <input type="submit" value="BUY" className="btn btn-primary btn-sm"/> 
                      </div>
                  </form>
                  </div>
                )) : state.products.map((product) => (
                  <div key={product.id} className="border p-4">
                    <img src={product.image} alt={product.name} className="mb-2 w-32" />
                    <h3 className="text-lg font-bold text">{product.name}</h3>
                    <p className='text text-xs'>{product.description}</p>
                    <p className="font-bold mt-2 text">${Math.ceil(product.price)}</p>
                    <form action="http://localhost:3001/checkout" method="GET">
                      <input type="hidden" name="title" value={product.name}/>
                      <input type="hidden" name="price" value={Math.ceil(product.price)}/>
                      <div className="card-actions justify-end"> 
                      <input type="submit" value="BUY" className="btn btn-primary btn-sm"/> 
                      </div>
                  </form>
                  </div>
                ))}
                
              </div>
            
          
          </div>
          
        </div>
      </div>
      <div> <Footer /></div>
   </div>
)

}

