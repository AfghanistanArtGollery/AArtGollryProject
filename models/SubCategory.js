const mongoose = require('mongoose');
require('./Category')
const SubCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true, 
      
    },
    categoryID: {
      type: mongoose.Types.ObjectId,
      ref:'Category',
      required: true,
    },
  }


);

module.exports = mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema);
