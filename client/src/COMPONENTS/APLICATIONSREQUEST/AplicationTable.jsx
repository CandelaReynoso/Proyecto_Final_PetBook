import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { aplicationRequest } from "../../Redux/actions";

const AplicationTable = ({
  index,
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
  const dispatch = useDispatch();

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
      dispatch(aplicationRequest());
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
      dispatch(aplicationRequest());
      console.log(response.data);
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div key={key}>
      <table className="table table-compact w-full">
        {/* aca acomodalo como quieras niki usa tu creatividad para agregar los textos que veas necesarios
       los h2 son de ejemplo nomas */}

        <thead>
          <tr>
            <th>{index + 1}</th>
            <th></th>
            <th className="text-xl text-gray-700">Postulante {name}</th>
            <th className="text-xl text-gray-700">candidato {petName}</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th></th>
            <td>name</td>
            <td>{name}</td>
            <td>petName</td>
            <td>{petName}</td>
          </tr>

          <tr>
            <th></th>
            <td>email</td>
            <td>{email}</td>
            <td>petSpecie</td>
            <td>{petSpecie}</td>
          </tr>

          <tr>
            <th></th>
            <td>address</td>
            <td>{address}</td>
            <td>petAge</td>
            <td>{petAge}</td>
          </tr>
        

          <tr>
            <th></th>
            <td>age</td>
            <td>{age}</td>
          </tr>

          <tr>
            <th></th>
            <td>postalCode</td>
            <td>{postalCode}</td>
          </tr>

          <tr>
            <th></th>
            <td>Facebook</td>
            <td>{facebook}</td>
          </tr>

          <tr>
            <th></th>
            <td>Instagram</td>
            <td>{instagram}</td>
          </tr>

          <tr>
            <th></th>
            <td></td>
            <td></td>
            <img
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              src={petImage}
              alt=""
            />
          </tr>
          <tr>
            <td>
              <button onClick={() => approvedRequest()}>aceptar</button>
            </td>

            <td>
              {" "}
              <button onClick={() => declinedRequest()}> rechazar</button>
            </td>
          </tr>
        </tbody>
      </table>

      <br />
    </div>
  );
};

export default AplicationTable;


