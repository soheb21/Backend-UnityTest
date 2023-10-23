const express = require("express");
const connectDB = require("./DB/db");
const app = express();
require("dotenv").config()
app.use(express.json());

app.use("/api/buyer",require("./routes/buyerRoutes"));

//DB
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server is running at port no ${PORT}`))