const express = require('express');
const app = express();

app.use("/",express.static("../admin"));
console.log(`test server on http://localhost:3000`)
app.listen(3000);