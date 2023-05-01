import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { aplicationRequest } from "../../Redux/actions";

const AplicationTable = ({
  id,
  userId,
  name,
  email,
  address,
  postalCode,
  age,
  facebook,
  instagram,
  petId,
  petName,
  petSpecie,
  petImage,
  petAge,
  key,
 
}) => {
  const dispatch = useDispatch()

  const approvedRequest = async () => {
    try {
      let response = await axios.put(`adoptions/approved/${id}`, {
        role: "admin_role",
      });

      if (response.data) {
        let succes = await axios.post(`/userPets/adopt`, {
          idUser: userId,
          idPet: petId,
        });
        window.alert(succes.data);
      }
      if (!response.data) {
        window.alert("solicitud aprobada");
      }
      dispatch(aplicationRequest())
    } catch (error) {
      window.alert(error.message);
    }
  };

  const declinedRequest = async () => {
    let token = window.localStorage.getItem("token");

    try {
      let response = await axios.delete(`adoptions/${id}`, {
        headers: { "Content-Type": "application/json", "x-token": token },
        role: "admin_role",
      });
     dispatch(aplicationRequest())
      console.log(response.data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <>
      {/* aca acomodalo como quieras niki usa tu creatividad para agregar los textos que veas necesarios
       los h2 son de ejemplo nomas */}

      <h2>Postulante {name}</h2>
      <h2>candidato {petName}</h2>
      <tbody key={key}>
        <tr>
          <td className="py-2">user name</td>
          <td className="text-gray-500">{name}</td>

          <td>name pet</td>
          <td>{petName}</td>
          <img
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            src={petImage}
            alt=""
          />
        </tr>

        <tr>
          <td className="py-2">email</td>
          <td className="text-gray-500">{email}</td>
          <td>specie</td>
          <td>{petSpecie}</td>
        </tr>

        <tr>
          <td className="py-2">address</td>
          <td className="text-gray-500">{address}</td>
          <td>age</td>
          <td>{petAge}</td>
        </tr>

        <tr>
          <td className="py-2">postalCode</td>
          <td className="text-gray-500">{postalCode}</td>
        </tr>

        <tr>
          <td className="py-2">age</td>
          <td className="text-gray-500">{age}</td>
        </tr>

        <tr>
          <td className="py-2">facebook</td>
          <td className="text-gray-500">{facebook}</td>
        </tr>

        <tr>
          <td className="py-2">instagram</td>
          <td className="text-gray-500">{instagram}</td>
        </tr>

        <tr>
          <td className="py-2">name</td>
          <td className="text-gray-500">{name}</td>
        </tr>
      </tbody>

      <button onClick={() => approvedRequest()}>aceptar</button>
      <br />
      <button onClick={() => declinedRequest()}> rechazar</button>
    </>
  );
};

export default AplicationTable;
