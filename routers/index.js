
const userRouter = require("./usersRouter");
const authRouter = require("./authRouters");

const apiRouter = (app) => {
    app.use('/users', userRouter);
    app.use('/auth', authRouter);

}

module.exports = apiRouter;
