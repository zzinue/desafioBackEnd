const express = require("express");
const users= require("../useCases/users")


const router = express.Router();

//users
router.get("/", async (request, response,next) => {
  
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
  const {userName}=request.params;

  try { 
    const name= await users.getByUserName(userName);
    response.json({
      ok:true, 
      message: "Done!",
      payload: {name}, 
    });
  }catch (error){ 
    next (error); 
  }
});



router.post ("/", async (request, response, next)=> {
  try { 
    const userData= request.body; 
    const userCreated= await users.create(userData);

    response.status(201).json({ 
      ok:true,
      message: "New user created", 
      payload: userCreated,
      
    });
  }catch (error){
    next(error);
  }
}); 
 

router.patch("/:id", async (request, response, next)=> {
  try {
    const {id}= request.params;
    const userData= request.body;
    const userUpdate= await users.update(id, userData); 
    response.json({
      ok:true,
      message: "User updated successfully",
      payload:{
        user: userUpdate,
      }
    })
  }catch (error){
    next (error);
  }
});






module.exports= router