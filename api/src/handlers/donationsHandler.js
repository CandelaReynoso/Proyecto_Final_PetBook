const {getAllDonations, postDonation} = require('../controllers/donationsController');

const getDonationsHandler = async (req, res) =>{
    const data = req.query;

    try {
        const response = await getAllDonations();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

const postDonationsHandler = async (req, res) => {
    const id = req.query.id;
    const amount = req.query.amount;

    try {
        const response = await postDonation(id, amount);
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getDonationsHandler,
    postDonationsHandler
}