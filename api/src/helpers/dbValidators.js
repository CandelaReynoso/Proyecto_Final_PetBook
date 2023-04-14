const { Role, User } = require('../DataBase/db');

const isRoleValid = async  (role = '') => {
        const roleExists = await Role.findOne({where: {role: role}});
        if(!roleExists){
            throw new Error(`The role ${role} does not exist in Db`)
        }
};

// verify if email exists
const isEmailValid = async (email = '') => {
     const emailExists = await User.findOne({where: {email: email}});
    if(emailExists){
        throw new Error(`Email ${email} already exists, type a different email.`)
    }
} 

module.exports = {
    isRoleValid,
    isEmailValid
};    