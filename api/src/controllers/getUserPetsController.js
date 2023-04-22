const { User, User_pet, Pet } = require("../DataBase/db.js");

const getPetsUserController = async (idUser) => {
    try {

        const user = await User.findByPk(idUser);

        if(!user) throw new Error(`There is no user with id ${idUser}`)

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

        if(!data.length) throw new Error("You have no adopted pets");

        return data;
    } catch (error) {
        return { error: error }
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