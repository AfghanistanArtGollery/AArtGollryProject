const mongoose = require('mongoose');
require('./User');
require('./Category');
require('./Comment');
require('./SubCategory');
require('./Style'); 
require('./Subject'); 
require('./Material');  //import models

const artworkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  
    shortDescription: {
      type: String,
      required: true,
    },
    longDescription: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
 
    framed: {
      type: Boolean,
    },

    dimensions: {
      type: {
        width: { type: Number, required: true },
        height: { type: Number, required: true },
      },
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    artist_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    score: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
    tags: {
      type: [String],
    },
    status: {
      type: Boolean,
      default: false,
    },

    categoryID: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    subjectID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',  // Reference to the Subject model
    },
    materialID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Material',  // Reference to the Material model
    },
    styleID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Style',  // Reference to the Style model
    },
    subCategoryID: {
      type: mongoose.Types.ObjectId,
      ref: 'SubCategory',
      required: false,
      default: null,
    },

    comments: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

const model = mongoose.models.ArtWork || mongoose.model('ArtWork', artworkSchema);
module.exports = model;
