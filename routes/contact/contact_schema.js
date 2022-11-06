const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contactSchema = new Schema({
  name:{
    type: String
  },
  email: {
     type : String
   },
   phone: {
    type : String
  },
  subject: {
    type : String
  },
  message: {
    type : String
  }
}, {
    collection: 'contact',
    versionKey: false
  })

module.exports = mongoose.model('contact', contactSchema)