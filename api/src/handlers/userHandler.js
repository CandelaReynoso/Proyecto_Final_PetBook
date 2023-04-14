
const userHandlerGet = (req, res) => {
    const query = req.query;
    res.status(200).json({msg: 'users get', query})
};

const userHandlerPost = (req, res) => {
    const body = req.body;
    res.status(200).json({msg: 'users post', body})
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