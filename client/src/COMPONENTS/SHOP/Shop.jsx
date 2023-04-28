import React, { useEffect } from "react";
import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import { getAllProducts } from "../../Redux/actions";
import { useDispatch, useSelector } from 'react-redux'

export default function Shop () {

    const dispatch = useDispatch();
    const allProducts = useSelector( state => state.products);

    useEffect(()=>{
        dispatch(getAllProducts());
    },[dispatch])

    console.log(allProducts)
    return (
        <div>
            
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">

                <div>
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
                </div>

                <div className="h-screen w-screen">

                <h1 className="titleLeft">SHOP ONLINE</h1>
                <div className="flex justify-end"> <img src="./perrotrabaja.png" alt="" width='500px'/> </div>

                </div>
        
                
            </div>


            <div> <Footer /></div>
            
        </div>
    )
}