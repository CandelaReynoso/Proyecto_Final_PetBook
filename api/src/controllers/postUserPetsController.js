const { User_pet, User, Pet } = require("../DataBase/db.js");

const postUserPetsController = async (idUser, idPet, history, image) => {
    try {
        const userPet = await User_pet.findOne({
            where: {
                userId: idUser,
                petId: idPet

            }
        });

        if (!userPet) throw new Error(`No relationship was found between idUser: ${idUser} and idPet: ${idPet}`);

        await userPet.update({
            history: history,
            statusHistory: true,
            image: image
        })

        return "Updated story";
    } catch (error) {

        return {error: error};
    }
}

const postAdoptUserPetsController = async (idUser, idPet) => {
    try {
        const user = await User.findByPk(idUser);
        const pet = await Pet.findByPk(idPet);

        await user.addPet(pet);

        return { user, pet }
    } catch (error) {
        return { error: error }
    }
}



module.exports = { postUserPetsController, postAdoptUserPetsController };