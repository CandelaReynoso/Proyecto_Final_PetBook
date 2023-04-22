const { Pet, User } = require("../DataBase/db.js");

const adoptionFormController = async (request) =>{
    const userEmail = request.userEmail;
    const petName = request.petName;
    const message = request.message;
    const date = request.date;

   const user = User.findOne(
    {
        where:{
            email: userEmail,
        }
    }
   );

   const pet = Pet.findOne(
    { 
        where:{
            name: petName,
        }
    }
   );

   const response = {
    user,
    pet,
    message,
    date
   }

   console.log(response);
   
   return response;
}

module.exports = adoptionFormController;