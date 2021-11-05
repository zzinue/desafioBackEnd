const express = require("express");
const users= require("../useCases/users")


const router = express.Router();

//users
router.get("/", async (request, response,next) => {
  const users=[];
  const {limit}= request.query; 

  try{
    const usersAll= await users.get();
    response.json({
      ok:true,
      message: "Done!",
      payload: usersAll,
    });
  }catch (error){
    next (error);
  }
});


// users por id 

router.get ("/:id", async(request, response, next)=>{
  const {id}=request.params;

  try { 
    const userId= await user.getById(id);
    response.json({
      ok:true, 
      message: "Done!",
      payload: {userId}, 
    });
  }catch (error){ 
    next (error); 
  }
});



router.post ("/", async (request, response, next)=> {
  try { 
    const userData= request.body; 
    const userCreated= await user.create(userData);

    response.status(201).json({ 
      ok:true,
      message: "New user created", 
      payload: userCreated,
      
    });
  }catch (error){
    next(error);
  }
}); 
 

module.exports= router