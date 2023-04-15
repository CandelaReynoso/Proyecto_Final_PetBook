const jwt = require('jsonwebtoken');

const generateJWT = ( uid = '' ) => {
    return new Promise( (resolve, reject) => {
        const payload = { uid };
        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, ( err, token) => {
            if(err){
                console.log(err);
                reject('not possible to generate JWT')
            }else{
                resolve(token)
            }
        } )
    })
};

module.exports = {
    generateJWT
}