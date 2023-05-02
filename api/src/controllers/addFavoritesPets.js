const {Favorite,User} = require("../database/db.js")

const addFavoritesPets = async (id, image,name,specie,gender,size,weight,age,idUser) =>{

const newFav = await Favorite.create({id,image,name,specie,gender,size,weight,age, idUser})

let findUser = await User.findByPk(idUser)

console.log(newFav.__proto__);
 
 await newFav.addUsers(findUser)
 
 const userFavs = await Favorite.findByPk(newFav.id,{include:[{model:User}]})
 
 return userFavs

}

module.exports = addFavoritesPets


