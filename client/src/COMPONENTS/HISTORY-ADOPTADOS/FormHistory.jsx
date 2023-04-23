import React, { useEffect, useState } from 'react'
import axios from 'axios';



function FormHistory() {
  const [history, setHistory] = useState({
    idUser: "",
    name: "",
    hist: "",
    idPet: "",
    image: ""
  });
  const [pets, setPets] = useState([]);
  const [status, setStatus] = useState("");


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
        [event.target.name]: base64
      })
      return;
    }
  };

  const handleOnChange = (e) => {

    setHistory({
      ...history,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Loading");
    try {
      const response = (await axios.post("http://localhost:3001/userPets/update", {
        idUser: history.idUser,
        idPet: history.idPet,
        history: history.hist,
        image: history.image
      })).data;

      setStatus(response);
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
    <div>
      <form onSubmit={handleSubmit} >

        <label>Your name:</label>
        <input type="text" name="name" value={history.name} onChange={handleOnChange} placeholder='  name...' />
        <br /><br />

        <label>History:</label>
        <br />
        <textarea name="hist" value={history.hist} onChange={handleOnChange} placeholder='Write your history...' cols="50" rows="10" />
        <br /><br />

        <label>Image:</label>
        <input type="file" name="image" onChange={uploadImage} />
        <br /><br />

        <label>Your pets:</label>
        <select name="idPet" value={history.pet} onChange={handleOnChange}>
          <option>choose a pet</option>
          {
            pets.length && pets.map((item, index) => {
              return (
                <option value={item.pet.id} key={index}>{item.pet.name}</option>
              )
            })
          }
        </select>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>

      {
        status === "Loading" ? <h6>Loading...</h6> : <h6>{status}</h6>
      }

    </div>
  )
}

export default FormHistory