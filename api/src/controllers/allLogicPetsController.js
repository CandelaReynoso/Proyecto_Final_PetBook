const { Pet } = require("../DataBase/db.js");
const { Op } = require("sequelize");

const allLogicPetsController = async ({ name, specie, gender, size, weight, age, godFather, sort, typeOrder}, page, pageSize,
  querys
) => {
  const offset = +page * +pageSize;
  const limit = +pageSize;
 let where = {};
  let order;

  let response;
  if (specie ||gender ||size ||weight ||age ||godFather ||sort ||typeOrder) {
    if (sort && typeOrder) {
      let toDelete = [];
      where = {
        specie: specie ? specie : toDelete.push("specie"),
        age: age ? age : (where = toDelete.push("age")),
        size: size ? size : (where = toDelete.push("size")),
        weight: weight ? weight : (where = toDelete.push("weight")),
        gender: gender ? gender : (where = toDelete.push("gender")),
      };
      for (let i = 0; i < toDelete.length; i++) {
        delete where[toDelete[i]];
      }
     
      response = await Pet.findAndCountAll({
        where,
        order: [[typeOrder, sort]],
        distinct: true,
        offset,
        limit,
      });
    }
    if (!sort && !typeOrder) {
      let toDelete = [];
      where = {
        specie: specie ? specie : toDelete.push("specie"),
        age: age ? age : (where = toDelete.push("age")),
        size: size ? size : (where = toDelete.push("size")),
        weight: weight ? weight : (where = toDelete.push("weight")),
        gender: gender ? gender : (where = toDelete.push("gender")),
      };
      
      for (let i = 0; i < toDelete.length; i++) {
        delete where[toDelete[i]];
      }
     
      response = await Pet.findAndCountAll({
        where,
        distinct: true,
        offset,
        limit,
      });
    }
  }

  if (name) {
    if (sort && typeOrder) {
      response = await Pet.findAndCountAll({
        where: {
          name: {
            [Op.startsWith]: name,
          },
        },
        order: [[typeOrder, sort]],
        distinct: true,
        limit,
        offset,
      });
    } if(!sort && !typeOrder){
      response = await Pet.findAndCountAll({
        where: {
          name: {
            [Op.startsWith]: name,
          },
        },
        distinct: true,
        limit,
        offset,
      });
    }
  }
  
  if (!specie && !gender && !size && !weight && !age && !godFather && !sort && !name) {
    response = await Pet.findAndCountAll({
      distinct: true,
      limit,
      offset,
    });
  }
  
  let pagination = {
  count : response.count,
  totalPage : Math.ceil(response.count / pageSize) -1  ,
  currentPage : page? parseInt(page):page,
  prevPage : page <= 0? null : parseInt(page)- 1,
  nextPage : page >= Math.ceil(response.count / parseInt(pageSize)) -1? null : parseInt(page) +1 ,
  data : response.rows,
  params:querys
 }
 
 return pagination;
};

module.exports = allLogicPetsController;


