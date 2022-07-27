import express from "express";
import morgan from "morgan";
import cors from "cors"
import dotenv from "dotenv"



const app = express();
dotenv.config({
  path: "./config/index.env"
});



app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

// routes

app.get("/", (req,res) =>{
  res.send("test route => home page");
});


// Page Not founded
app.use((req, res) => {
  res.status(404).json({
    msg: 'Page not founded',
  });
});

const PORT = process.env.PORT

app.listen(5000, ()=>{
  console.log(`App listening on port ${PORT}!`)
})