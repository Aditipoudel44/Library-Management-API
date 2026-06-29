const express = require("express");

const app = express();

require("./config/db");

app.use(express.json());

const bookRoutes = require("./routes/bookRoutes");

app.use("/api", bookRoutes);

app.listen(5005, () => {

    console.log("Server Running on Port 5005");

});