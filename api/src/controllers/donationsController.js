const { Donations } = require('../database/db');

const getAllDonations = async (id)=>{
    
    if(!id){
      const allDonationsRepeated = await Donations.findAll();
      

        let allDonations = [];

        for(let i = 0; i < allDonationsRepeated.length; i++){
            if(i%2 === 0){
            allDonations.push(allDonationsRepeated[i]);
        }
        
    }
    return allDonations;  
    } else {
        const userDonations = await Donations.findAll({
            where: {
                userID: id
            }
        })

        let allUserDonations = [];

        for(let i = 0; i < userDonations.length; i++){
            if(i%2 === 0){
                allUserDonations.push(userDonations[i]);
        }
        
    }
    return allUserDonations;  
}
}

const postDonation = async(id, amount) =>{
    
    await Donations.create({
        userID: id,
        amount: amount
    });

    return "success"
}

module.exports = {
    getAllDonations,
    postDonation
}