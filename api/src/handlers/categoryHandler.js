

const categoryHandlerPost = (req, res) => {
    
    const name = req.body.name;
    
    res.status(200).json({msg: 'todo ok categories route post'})
}

module.exports = {
    categoryHandlerPost
};