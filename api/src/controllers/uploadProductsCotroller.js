const { Product } = require("../database/db");
const productos = require("../../productosJSON.json");



const uploadProductos = async () => {
  try {
    if(!productos.length) throw new Error("No hay productos")
    
    productos.forEach(item => item.userId = "0b3a68cd-b171-4451-aad4-dbf744fa3a19")

    const count = await Product.count();
    if (count === 0) await Product.bulkCreate(productos);

  } catch (error) {
    console.log(error);
  }
}

const lengthProducts = async () => {
  const count = await Product.count();
  console.log(count);
}


module.exports = { uploadProductos, lengthProducts };