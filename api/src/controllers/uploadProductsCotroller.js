const { Product } = require("../database/db");
const path = require('path');
const fs = require('fs');


const { promisify } = require('util');
const readFileAsync = promisify(fs.readFile);


const readProductos = async () => {
  const pathProductos = path.join('D:\\', 'henry', 'PF', 'Proyecto_Final_PetBook', 'api', 'productosJSON.json');
  try {
    const productosJSON = await readFileAsync(pathProductos, "utf-8");
    const productos = JSON.parse(productosJSON);
    // console.log(productos[5]);
    return productos;

  } catch (error) {
    return { error: error };
  }
}

const uploadProductos = async () => {
  try {
    const productos = await readProductos();
    if (productos.error) throw new Error(productos.error);

    const count = await Product.count();

    productos.forEach( item => item.userId = "0b3a68cd-b171-4451-aad4-dbf744fa3a19")

    if (count === 0) await Product.bulkCreate(productos);

  } catch (error) {
    console.log(error);
  }
}

const lengthProducts = async () => {
  const count = await Product.count();
  console.log(count);
}


module.exports = { readProductos, uploadProductos, lengthProducts };