const userModel= require("../../models/users");
const encrypt= require("../../lib/encrypt");


const get= async ()=>{
    const allUsers= await userModel.find({}).exec();
    return allUsers; 

}

const create= async (userData)=> {
    const {firstName, lastName, userName, role, password, email}= userData
    const hash= await encrypt.hashPassword(password);
    const user= new User.model({firstName, lastName, userName, role, password:hash, email})
    return await user.save(); 
}
 
module.exports= {
    get, 
    create, 
}