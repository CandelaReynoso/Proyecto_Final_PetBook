import React from "react";


const TablaUsers = ({ user, email, index,id,deleteLogicUser}) => {

//voy a necitar usar el id para poder eliminar el usuario


  return (
    <>
    
      <td className="py-2 ">{user}</td>
      <td className="text-gray-500">{email}</td>
      <button className="btn btn-ghost btn-sm items-center" onClick={()=>deleteLogicUser(id)}>X</button>
    </>
  );
};

export default TablaUsers;
