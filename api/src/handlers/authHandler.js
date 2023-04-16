const { User } = require('../DataBase/db');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generateJWT');

const authHandlerPost = async (req, res) => {
    try {
        const { email, password } = req.body;

        // verify if email exists
        const user = await User.findOne({where: {email: email}});
        if ( !user ) {
            return res.status(400).json({msg: 'Email not valid.'})
        }

        // verify if user is active
        if ( !user.status ) {
            return res.status(400).json({msg: 'user inactive'})
        }
        // verify password
        const validPassword = bcryptjs.compareSync( password, user.password);
        if ( !validPassword ) {
            return res.status(400).json({msg: 'invalid password'})
        }

        // generate json web token JWT
        const token = await generateJWT( user.id );


        res.json({
            user,
            token
        })
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = authHandlerPost;