const express = require("express");
const {response}=require("express");
//const config= require("./lib/config"); 
const app = express();
const port = 8000;
const apiRouter = require("./routers/index.js");
//const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
//const authHandler= require ("./middlewares/authHandlers");
const db= require("./lib/db")
//const cors= require("cors")

//app.use(cors("*"));

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});


/* app.use(authHandler); */

apiRouter(app);

/* app.use(logErrors);
app.use(errorHandler); */

app.listen(port, ()=>{

    console.log("Listening on port:", port)
    db.connect().then(()=>{
        console.log("DB Connect");
    }).catch((err)=> {
        console.error("Connection error", err)
    })

});
