const bcryptjs = require('bcryptjs'); // npm i bcryptjs
const { User } = require('../DataBase/db');


const userHandlerGet = (req, res) => {
    const query = req.query;
    res.status(200).json({msg: 'users get', query})
};

const userHandlerPost = async (req, res) => {
    try {

        const {nickname, email, password, role} = req.body;
        const newUser = {nickname, email, password, role};

        // encrypt password
        const salt = bcryptjs.genSaltSync(); // 10 rounds by default
        newUser.password = bcryptjs.hashSync( password, salt );
        
        //save in db
        const savedUser = await User.create(newUser)
        
        res.status(200).send(savedUser)

    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

const userHandlerPut = (req, res) => {
    const id = req.params.id;
    res.status(200).json({msg: 'users put', id})
};

const userHandlerDelete = (req, res) => {
    res.status(200).json({msg: 'users delete'})
};

module.exports = {
    userHandlerGet,
    userHandlerPost,
    userHandlerPut,
    userHandlerDelete
}