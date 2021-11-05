const mongoose= require("mongoose"); 
const {Schema}= mongoose; 

const schema = new Schema ({
    firstName:{
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,

    }, 
    lastName: {
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,

    }, 
    userName: {
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,
        unique: true,
    }, 
    password: {
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,
    }, 
    email:{ 
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,
    },
    role: {
        type: String, 
        required: true, 
        trim: true, 
        maxlength: 50,
        minlength: 1,
        
    }, 

})

module.exports = {
    model: mongoose.model("userDevto", schema),
    schema,
}