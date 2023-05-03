const { User, User_pet, Pet } = require("../database/db.js");

const getPetsUserController = async (idUser) => {
    try {

        const user = await User.findByPk(idUser);

        if (!user) return { message: `There is no user with id ${idUser}` }

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

        if (!data.length) return { message: "You have no adopted pets" };

        return data;
    } catch (error) {
        return { error: error }
    }
}

const getHistoryUserPet = async () => {
    try {
        const data = await User_pet.findAll({
            where: {
                show: true,
                statusHistory: true
            },
            include: [
                {
                    model: User,
                    attributes: ['nickname']
                },
                {
                    model: Pet,
                    attributes: ['name']
                }
            ],
            attributes: ['history', 'image']
        });


        return data;
    } catch (error) {
        return { error }
    }
}

const getacceptStories = async () => {
    try {
        const data = await User_pet.findAll({
            where: {
                statusHistory: true
            },
            include: [
                {
                    model: User,
                    attributes: ['nickname', 'email', 'role']
                },
                {
                    model: Pet,
                    attributes: ['name', 'image', 'specie', 'gender', 'size', 'weight']
                }
            ],
            attributes: ['history', 'image', 'show', 'userId', 'petId']
        });

        return data
    } catch (error) {
        return { error: error }
    }
}

const getHistoryNotifications = async () => {
    try {
        const data = await User_pet.findAll({
            where: {
                statusHistory: true,
                show: false
            }
        });

        if (!data) throw new Error("no notifications");

        return data;
    } catch (error) {
        return { error: error }
    }
}

module.exports = { getPetsUserController, getHistoryUserPet, getacceptStories, getHistoryNotifications };