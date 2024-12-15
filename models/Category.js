const mongoose = require('mongoose');

require('./SubCategory')
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true, 
      
    },

    // no need for now 
    // subCategories:[
    //   {
    //     type:mongoose.Types.ObjectId,
    //     ref:'SubCategory',
    //     required:false
    //   }
    // ]
    
 
  }


);

module.exports = mongoose.models.Category || mongoose.model('Category', categorySchema);

