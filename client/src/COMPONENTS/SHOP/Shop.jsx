import React, { useEffect } from 'react';
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import {getAllProducts} from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import loadingGif from "../../../public/dog.loading2.gif";
import { useState } from 'react';
import Loading from "../LOADING/Loading";

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllProducts())
      .then(() => setIsLoading(false));
  }, [dispatch]);


  

  console.log(products)
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
        <div className="h-full w-screen">
          <div>
          <h1 className="titleLeft">SHOP ONLINE</h1>
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
                {Array.isArray(products) && products.map((product) => (
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

{/* 
<div className="card w-72 bg-base-100 shadow-xl m-4">
<h2 className="card-title text-black font-['candara']">{product.name}</h2>
<h5 className="text bg-primary w-fit rounded-full">${Math.ceil(product.price)}</h5>
<form action="http://localhost:3001/checkout" method="GET">
    <input type="hidden" name="title" value={product.name}/>
    <input type="hidden" name="price" value={Math.ceil(product.price)}/>
    <div className="card-actions justify-end"> <input type="submit" value="BUY" className="btn btn-primary"/> 
</div>
</form>
</div> */}