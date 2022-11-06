const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  father:{
    type: String
  },
  email:{
    type: String
  },
  cnic: {
    type: String
  },
  edu: {
    type: String
  },
  user:{
    type: String
  },
  password:{
    type: String
  },
  status:{
    type: String
  },
  address:{
    type:String
  }
}, {
    collection: 'student',
    versionKey: false
  })

module.exports = mongoose.model('student', studentSchema)