import React, { useEffect } from 'react';
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import {getAllProducts} from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';

export default function Shop() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);


  console.log(products)
  return (
    <div>
      <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
        <div>
          {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" />}
        </div>
        <div className="h-screen w-screen">
          <h1 className="titleLeft">SHOP ONLINE</h1>
          <div className="flex justify-end">
            <img src="./perrotrabaja.png" alt="" width='500px' />
          </div>
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">Choose a product! </h2>
              <div className="grid grid-cols-4 gap-4">
                {Array.isArray(products) && products.map((product) => (
                  <div key={product.id} className="border p-4">
                    <img src={product.image} alt={product.name} className="mb-2" />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="font-bold mt-2">${product.price}</p>
                  </div>
                ))}
                
              </div>
            )
          
          </div>
          
        </div>
      </div>
      <div> <Footer /></div>
    </div>
  )
  
}