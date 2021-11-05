const userRouter= require("./usersRouter"); 


const apiRouter= (app)=> {
    app.use('/usersDevto',userRouter)

}
module.exports= apiRouter 