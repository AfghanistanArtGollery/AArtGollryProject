const mongoose =require("mongoose");

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["ADMIN","USER","AUTHER","ARTIST"],
        default:"USER",
    },

    refreshtoken:String

})
const  model = mongoose.models.User||mongoose.model("User",schema)

export default model