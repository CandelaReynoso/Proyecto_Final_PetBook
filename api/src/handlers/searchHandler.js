const { response } = require('express');


const allowedCollections = [
    'users',
    'category',
    'products',
    'roles'
];

const searchUsers = async ( term = '', res = response ) => {

}

const searchHandler = async (req, res) => {
    try {
        const { collection, term } = req.params;

        if ( !allowedCollections.includes(collection) ) {
            return res.status(400).json({
                msg: `Allowed collections are: ${allowedCollections}`
            })
        }

        switch(key){
            case 'users':
                break;
            case 'category':
                break;
            case 'products':
                break;
            default:
                res.status(500).json({
                    msg: 'Search forgotten'
                })
        }

        res.json({
            collection, term
        })
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    searchHandler
}