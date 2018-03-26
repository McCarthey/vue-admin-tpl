const express = require('express');
const app = express();

app.use("/",express.static("../admin"));
app.listen(3000);