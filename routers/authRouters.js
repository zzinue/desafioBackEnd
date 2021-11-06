const express= require("express");
const jwt= require("../lib/jwt"); 
const users= require("../useCases/users"); 

const router=express.Router();

router.post ("/",async (require,response, next)=>{
    const {userName, password}=require.body;
    const user= await users.getByUserName(userName);
    const isMatch= await users.authenticate(user,password);
    if (isMatch){
        const payload= {
            sub:user._id,
            role:user.role,
        };
        const token= await jwt.sign(payload);
        response.status(200).json({
            ok:true,
            message: "sign successfull",
            payload: {
                token, 
            },
        });
    }else {
        response.status(401).json({
            ok:false,
            message: "password missmatch",
            
        })
    }
})
