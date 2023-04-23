const { User, User_pet, Pet } = require("../database/db.js");

const getPetsUserController = async (idUser) => {
    console.log("prueba");
    try {
        const data = await User_pet.findAll({
            where: {
                userId: idUser
            },
            include: [
                {
                    model: Pet,
                    attributes: ['name', 'id']
                }
            ],
            attributes: []
        })

        return data;
    } catch (error) {
        return { error }
    }
}

const getHistoryUserPet = async () => {
    try {
        const data = await User_pet.findAll({
            where: {
                show: false,
                statusHistory: true
            },
            include: [
                {
                    model: User,
                    attributes: ['nickname']
                },
                {
                    model: Pet,
                    attributes: ['name', 'image']
                }
            ],
            attributes: ['history']
        });


        return data;
    } catch (error) {
        console.log(error)
        return { error }
    }
}

module.exports = { getPetsUserController, getHistoryUserPet };