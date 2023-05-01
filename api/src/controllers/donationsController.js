const { Donations } = require('../database/db');

const getAllDonations = async ()=>{
    
    const allDonations = await Donations.findAll();

    return allDonations;
}

const postDonation = async(id, amount) =>{
    
    await Donations.create({
        amount: amount,
        anonymous: false
    });

    return "success"
}

module.exports = {
    getAllDonations,
    postDonation
}