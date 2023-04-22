const { Pet } = require('./db');

async function loadPets(){
    try {
        const count = await Pet.count();
        if(count === 0){
            await Pet.create(
                {
                    "name": "Mittens",
                    "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Siames_hi7pp7.avif",
                    "adopted": "true",
                    "size": "Large",
                    "weight": 4,
                    "age": 3,
                    "gender": "Female",
                    "specie": "Cat"
                }
            );

            await Pet.create(
                {
                    "name": "Buddy",
                    "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Golden_yzsyut.avif",
                    "adopted": "false",
                    "size": "Medium",
                    "weight": 30,
                    "age": 2,
                    "gender": "Male",
                    "specie": "Dog"
                });

            await Pet.create(
                {
                "name": "Thumper",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Rabbit_cokzf7.avif",
                "adopted": "true",
                "size": "Medium",
                "weight": 2,
                "age": 6,
                "gender": "Male",
                "specie": "Rabbit"
            });

                await Pet.create(
                {"name": "Luna",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/RussianBlue_abh5ra.avif",
                "adopted": "false",
                "size": "Large",
                "weight": 5,
                "age": 8,
                "gender": "Female",
                "specie": "Cat"})

                await Pet.create(
                {"name": "Bailey",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/Labrador_hflfet.avif",
                "adopted": "false",
                "size": "Small",
                "weight": 10,
                "age": 2,
                "gender": "Male",
                "specie": "Dog"})

                await Pet.create(
                {"name": "Bugs",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Cobayo_uc24nn.avif",
                "adopted": "true",
                "size": "Small",
                "weight": 1,
                "age": 2,
                "gender": "Male",
                "specie": "Guinea Pig"})

                await Pet.create(
                {"name": "Simba",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Maine_fv0sqo.avif",
                "adopted": "false",
                "size": "Large",
                "weight": 8,
                "age": 10,
                "gender": "Male",
                "specie": "Cat"})

                await Pet.create(
                {"name": "Maxime",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417452/Animals_PF/German_wmbdjq.avif",
                "adopted": "true",
                "size": "Large",
                "weight": 45,
                "age": 6,
                "gender": "Female",
                "specie": "Dog"})

                await Pet.create(
                {"name": "Kiwi",
                "image": "https://res.cloudinary.com/dasosdw8d/image/upload/v1681417451/Animals_PF/Parrot_icsjhf.avif",
                "adopted": "false",
                "size": "Small",
                "weight": 1,
                "age": 15,
                "gender": "Female",
                "specie": "Parrot"
                }
            );
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = loadPets;