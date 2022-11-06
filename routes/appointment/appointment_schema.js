const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let appointSchema = new Schema({
  name:{
    type: String
  },
  father: {
     type : String
   },
   email: {
    type : String
  },
  amount:{
    type:  String
  },
  doc: 
    { type : String }
  
}, {
    collection: 'appointment',
    versionKey: false
  })

module.exports = mongoose.model('appointment', appointSchema)