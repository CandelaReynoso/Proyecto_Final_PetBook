const { validationResult } = require('express-validator'); // npm i express-validator

const validateAttributes = (req, res, next) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();
}

module.exports = {
    validateAttributes
};