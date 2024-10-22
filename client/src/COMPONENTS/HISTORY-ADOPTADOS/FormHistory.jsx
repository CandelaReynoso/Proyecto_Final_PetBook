import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../HEADER/Header';
import HeaderLogin from '../HEADER/HeaderLogin';
import Footer from '../FOOTER/Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function FormHistory() {
  const [history, setHistory] = useState({
    idUser: '',
    name: '',
    hist: '',
    idPet: '',
    image: '',
  });
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmit, setFormSubmit] = useState(false);
  const navigate = useNavigate();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const files = event.target.files;

    if (files.length === 1) {
      const base64 = await convertBase64(files[0]);

      setHistory({
        ...history,
        [event.target.name]: base64,
      });
      return;
    }
  };

  const handleOnChange = (e) => {
    setHistory({
      ...history,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let errors = {};

    //validation for the name
    if (!history.name) {
      errors.name = 'Please enter your name!';
    } else if (!/^[a-zA-Z0-9\s]{2,16}$/.test(history.name)) {
      // 2 to 16 digits accept uppercase and lowercase letters, accents, and spaces.
      errors.name = 'Name can only contain letters, numbers and spaces.';
    }

    //validation history
    if (!history.hist) {
      errors.hist = 'Please, enter your message!';
    } else if (history.hist.length > 150) {
      errors.hist = 'Please enter a message with a maximum of 150 characters!';
    }
    

    //validation image
    if (!history.image) {
      errors.image = 'Image is required';
    }

    //validation mascosta
    if (!history.idPet) {
      errors.idPet = 'Pet is required';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Loading');
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      // if there are any errors, set them in the state and return early
      setErrors(errors);
      setStatus('Error');
      return;
    }

    setFormSubmit(true);
    try {
      const response = await axios.post('/userPets/update', {
        idUser: history.idUser,
        idPet: history.idPet,
        history: history.hist,
        image: history.image,
      });

      setStatus(response.data);
      Swal.fire({
        title: 'HELP A PET!',
        text: 'Donate ❤ ',
        imageUrl: 'https://media.tenor.com/O7tk8A-EoIgAAAAj/puppy.gif',
        imageWidth: 300,
        imageHeight: 300,
        imageAlt: 'Custom image',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'Not Now!',
        confirmButtonColor: '#1B2021',
        ccancelButtonColor: 'transparent',
        cancelButtonBorder: 'none',
        cancelButtonColor:'#C0F8D1',
        background: '#C0F8D1',
        color: '#1B2021',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/donate");
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate("/home");
        }
      });
      setFormSubmit(true);
      sendEmail(values.name, values.lastname, values.email, values.message)
        .then(() => {
          console.log('Form was sent!');
          setTimeout(() => setFormSubmit(false), 4000);
          resetForm();
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          setTimeout(() => setFormSubmit(false), 4000);
        });
    } catch (error) {
      setStatus(error.response.data);
    }
  }
  

  useEffect(() => {
    const idFromLocalStorage = localStorage.getItem("id");
    setHistory({
      ...history,
      idUser: idFromLocalStorage
    })

    if (idFromLocalStorage) {
      axios.get("http://localhost:3001/userPets/Pets", { params: { idUser: idFromLocalStorage } })
        .then(response => setPets(response.data))
        .catch(error => setStatus(error.response.data));
    }

  }, []);

  

  return (

<div className="h-full">
        <div> {localStorage.getItem('token') ? <HeaderLogin className='mb-4' />  : <Header className="mb-4" />} </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

          <div  className='flex flex-col justify-center'> 
            <div >
              <h1 className="subtitle">SHARE YOUR STORY</h1>
            </div>

            
   
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white  p-4' onSubmit={handleSubmit} >

{/* <label className='inputs'>Your Name:</label> */}
<input className='inputs' type="text" name="name" value={history.name} onChange={handleOnChange} placeholder='Name:' />
{errors.name && ( // si esta  mi estado error.name--> seteame un p con ese error
  <p className="text-error">{errors.name}</p>
                )}


{/* <label className='inputs'>Story:</label> */}
<div className='mt-5'></div>
<textarea className='textareas text' name="hist" value={history.hist} onChange={handleOnChange} placeholder='Write here your story...' cols="50" rows="10" />
{errors.hist && ( // si esta  mi estado error.name--> seteame un p con ese error
  <p className="text-error">{errors.hist}</p>
                )}


<label className='text'>Image:</label>
<input className='' type="file" name="image" onChange={uploadImage} />
{errors.image && ( // si esta  mi estado error.name--> seteame un p con ese error
  <p className="text-error">{errors.image}</p>
)}


<label className='inputs'> Select your pet:</label>
<select className='seleccion' name="idPet" value={history.pet} onChange={handleOnChange}>
  <option>Choose a pet</option>
  {
    pets.length && pets.map((item, index) => {
      return (
        <option value={item.pet.id} key={index}>{item.pet.name}</option>
      )
    })
  }
  {errors.idPet && ( // si esta  mi estado error.name--> seteame un p con ese error
  <p className="text-error">{errors.idPet}</p>
)}
</select>
<div className="buttonSubtmit text-center ">
<button className=""  type ="submit ">SEND</button>
</div>
</form>

{

status === "Loading" ? <h6 className="text-green-300 font-bold">Loading...</h6> : <h6>{status}</h6>
}

</div>

{/* IMAGEN */}
            <div className='hidden sm:block'>  
              <img className='w-[100%] h-full  object-cover' src="creaTuHistoria.jpeg" alt="perro en computadora" />
            </div>
        </div>

        <div className='mt-40'>
          <Footer />
        </div>
</div>


  )
}

export default FormHistory;