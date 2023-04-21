import { useState } from "react";
import Styles from './Donation.module.css'
import Header from "../HEADER/Header";
import Footer from "../FOOTER/Footer";
import HeaderLogin from "../HEADER/HeaderLogin"

export default function Donations(){

    const [error, setError] = useState('Enter your donation');
    const [donation, setDonation] = useState(0);

    function handleChange(event){
        const amount = event.target.value;

        if(!amount || amount < 100 || amount > 10000){
            setError("Enter an amount between 100 and 10.000");
        } else{
            setError(null);
            setDonation(amount);
        }
    }

    return (
<<<<<<< HEAD
        <div className={Styles.container}>
            <h2>Puppy Size Donation</h2>
            <h5>Value: AR$ 1.000</h5>
            <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET">
                <input type="hidden" name="title" value="Puppy Size Donation"/>
                <input type="hidden" name="price" value="1000"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>
=======
        <div>
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950

            <div>
              {localStorage.getItem('token') ? <HeaderLogin className='mb-4' /> : <Header className="mb-4" /> }    
            </div>

<<<<<<< HEAD
            <h2>Adventurous Hearts Donation</h2>
            <h5>Valor de AR$ 2.500</h5>
            <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET">
                <input type="hidden" name="title" value="Adventurous Hearts Donation"/>
                <input type="hidden" name="price" value="2500"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>
=======
    <div className="m-8 align-middle items-center">
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950

            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <div className="card-body"> 
                    <h2 className="card-title">Puppy Size Donation</h2>
                    <h5> AR$ 1.000</h5>
                    <form action="http://localhost:3001/checkout" method="GET">
                        <input type="hidden" name="title" value="Puppy Size Donation"/>
                        <input type="hidden" name="price" value="1000"/>
                        <div className="card-actions justify-end"> <input type="submit" value="DONATE NOW" className="btn btn-primary"/> </div>
                    </form>
                </div>
            </div>

<<<<<<< HEAD
            <h2>Large Love Donation</h2>
            <h5>Valor de AR$ 5.000</h5>
            <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET">
                <input type="hidden" name="title" value="Large Love Donation"/>
                <input type="hidden" name="price" value="5000"/>
                <input type="submit" value="Donar" className="btn"/>
            </form>
=======
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                    <h2 className="card-title">Adventurous Hearts Donation</h2>
                    <h5> AR$ 2.500</h5>
                    <form action="http://localhost:3001/checkout" method="GET">
                        <input type="hidden" name="title" value="Adventurous Hearts Donation"/>
                        <input type="hidden" name="price" value="2500"/>
                        <div className="card-actions justify-end"><input type="submit" value="DONATE NOW" className="btn btn-primary"/></div>
                    </form>
                </div>
            </div >
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950

            <div className="card w-96 bg-base-100 shadow-xl m-4" >
                <div className="card-body">
                    <h2 className="card-title">Large Love Donation</h2>
                    <h5>AR$ 5.000</h5>
                    <form action="http://localhost:3001/checkout" method="GET">
                        <input type="hidden" name="title" value="Large Love Donation"/>
                        <input type="hidden" name="price" value="5000"/>
                        <div className="card-actions justify-end"><input type="submit" value="DONATE NOW" className="btn btn-primary"/> </div>
                    </form>
                </div>
            </div>

<<<<<<< HEAD
            <h2>Personalized Donation</h2>
            <form action="https://proyectofinalpetbook-production.up.railway.app/checkout" method="GET" className={Styles.container}>
                <input type="hidden" name="title" value="Personalized Donation"/>
                <label>Enter the amount to donate</label>
                <input type="number" min="100" max="10000" placeholder="Amount..." onChange={handleChange}/>
                <input type="hidden" name="price" value={donation}/>
                <br />
                {
                    error
                    ? (<>
                        <span className={Styles.error}>*{error}</span>
                        <br />
                        <input type="submit" value="Donar" className="btn" disabled/>
                        </>)
                    : <input type="submit" value="Donar" className="btn"/>
                }
                <br />
            </form>
=======
            <div className="card w-96 bg-base-100 shadow-xl m-4">
                <div className="card-body">
                <h2 className="card-title">Personalized Donation</h2>
                 <form action="http://localhost:3001/checkout" method="GET" className={Styles.container}>
                    <input type="hidden" name="title" value="Donación pequeño corazón."/>
                    <label className="italic">select here the amount to donate: </label>
                    <input type="number" min="100" max="10000" placeholder=" $..." onChange={handleChange}/>
                    <input type="hidden" name="price" value={donation}/>
                    <br />
                    {
                        error
                        ? (<>
                            <span className={Styles.error}>*{error}</span>
                            <br />
                            <input type="submit" value="Donar" className="btn" disabled/>
                            </>)
                        : <input type="submit" value="DONATE NOW" className="btn btn-primary "/>
                    }
                    <br />
                 </form>
>>>>>>> 9cfe1e7b1c4ad93cf6a37ba253ca8c9509859950

                </div>
            </div>
                    
    </div>      


            <div> <Footer /></div>
        </div>
    )
}