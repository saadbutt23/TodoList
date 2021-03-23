const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://test:Test@cluster0.mdani.mongodb.net/react")

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/noteRoute")); // it take a middleware function by default




app.listen(3001, function(){
    console.log("express server is running on port");
}); 