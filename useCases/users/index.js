const User= require("../../models/users");
const encrypt= require("../../lib/encrypt");
const userModel= require("../../models/users").model; 


const get= async ()=>{
    const allUsers= await userModel.find({}).exec();
    return allUsers; 

}

const getByUserName= async (username)=>{
    return await  userModel.findOne({username}).exec();
   
};

const create= async (userData)=> {
    const {firstName, lastName, userName, role, password, email,avatar}= userData
    const hash= await encrypt.hashPassword(password);
    const user= new User.model({firstName, lastName, userName, role, password:hash, email, avatar})
    return await user.save(); 
}

const update= async (id, userData)=>{
    const {firstName, lastName, userName, role, password, email, avatar}= userData;
    const hash= await encrypt.hashPassword(password);
    return await User.model.findByIdAndUpdate(id, {firstName, lastName, userName, role, password:hash, email, avatar}).exec(); 

}

const authenticate= async (user,password)=> {
    const hash= user.password;
    return await encrypt.verifyPassword(password,hash);


}
 
module.exports= {
    get, 
    create, 
    getByUserName,
    update,
    authenticate,
}