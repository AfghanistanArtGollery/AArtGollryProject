const mongoose = require("mongoose");
require('./User')
require('./Category')
const schema = new mongoose.Schema(
  {
    title : {
      type: String,
      required: true,
    },
    excerpt :{
        type:String,
        required:true
    },
    content : {
      type: String,
      required: true,
    },

    userID:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'User'

    },
    categoryID:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'Category'
    },
    published:{
        type:Boolean,
        default:false
    },
    img:{
        type:String,
        required:true
    }


  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Blog || mongoose.model("Blog", schema);

export default model;
