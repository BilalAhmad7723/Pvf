const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let FaqSchema = new Schema({
  quesid:{
    type: String
  },
   quesname: {
    type : String
  },
  ques: {
   type : String
 },
  quesdate: {
    type : String
  },
  ansid:{
    type: String
  },
  ans:{
    type  : String
  },
  ansname:{
    type  : String
  },
  ansdate:{
    type  : String
  }
}, {
    collection: 'comments',
    versionKey: false
  })

module.exports = mongoose.model('comments', FaqSchema)