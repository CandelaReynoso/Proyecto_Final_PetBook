import Header from "../HEADER/Header";
import HeaderLogin from "../HEADER/HeaderLogin";
import Footer from "../FOOTER/Footer";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts} from '../../Redux/actions';

export default function Shop (props) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const products = useSelector((state) => state.products);
    
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            dispatch(getAllProducts());
            setLoading(false);
        }
        fetchData();
    }, [dispatch]);

    return (
        <div>
            <div className="bg-[url('/backdonations1.png')] bg-no-repeat w-[100hv] h-[100hv]">
                {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }
                
                <div className="h-screen w-screen">
                    {loading ? (
                        <h1 className="titleLeft">Loading...</h1>
                    ) : (
                        <>
                            <h1 className="titleLeft">Our Products</h1>
                            <div className="flex flex-wrap justify-center">
                                {products && products.map(product => (
                                    <div key={product.id} className="max-w-md mx-2 my-2 shadow-md rounded-lg overflow-hidden">
                                        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
                                        <div className="p-4">
                                            <h2 className="text-gray-900 font-bold text-2xl mb-2">{product.name}</h2>
                                            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                                            <div className="flex justify-between items-center">
                                                <p className="font-bold text-xl">${product.price}</p>
                                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div> <Footer /></div>
        </div>
    )
}
