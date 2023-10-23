const express = require("express");
const connectDB = require("./DB/db");
const app = express();
require("dotenv").config()
app.use(express.json());


//DB
connectDB();

app.use("/api/buyer",require("./routes/buyerRoutes"));
app.use("/api/seller",require("./routes/sellerRoutes"));
app.use("/api/user",require("./routes/userRoutes"));



const PORT = process.env.PORT;
app.listen(PORT, console.log(`Server is running at port no ${PORT}`))