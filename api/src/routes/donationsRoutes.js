const { Router } = require("express");
const {getDonationsHandler, postDonationsHandler} = require('../handlers/donationsHandler');

const app = Router();

app.get('/', getDonationsHandler);
app.post('/', postDonationsHandler);

module.exports = app;