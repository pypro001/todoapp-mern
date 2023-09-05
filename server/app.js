const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const env = require("dotenv");
const todoRoutes = require("./routes/todos.routes.js")

//express initiallization
const app = express();
//env config
env.config();

// corss-origin-allow-all
app.use(cors());

// json parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to TODO Node.js application backend." });
  });

// api
app.use('/api/v1',todoRoutes);

//database connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("Connected to MongoDB database successfully.");
    app.listen(process.env.PORT,()=>{
        console.log(`Server is running at PORT ${process.env.PORT}`)
    })
}).catch(err=>{
    console.log(err)
})