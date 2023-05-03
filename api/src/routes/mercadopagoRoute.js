const express = require('express');
const app = express();
require("dotenv").config();
const { PROD_ACCESS_TOKEN } = process.env;

// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: PROD_ACCESS_TOKEN,
});

//Routes
app.get('/', (req, res) =>{
    
    // Crea un objeto de preferencia
    let preference = {
        items: [
        {
            title: req.query.title,
            unit_price: parseInt(req.query.price),
            quantity: 1,
        },
        ],
        back_urls: {
            success: `https://proyecto-final-pet-book-zgni.vercel.app/thanks?id=${req.query.id}&amount=${req.query.price}&type=${req.query.type}&target=${req.query.target}`,
            failure: "https://proyecto-final-pet-book-zgni.vercel.app/failure",
            pending: "https://proyecto-final-pet-book-zgni.vercel.app/pending"
        },
        auto_return: "approved",
    };
    
    mercadopago.preferences
        .create(preference)
        .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso

        
        res.redirect(response.body.init_point);

        })
        .catch(function (error) {
        console.log(error);
        });
    })


  

module.exports = app;