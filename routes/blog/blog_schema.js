const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
  image:{
    type: String
  },
  title:{
    type: String
  },
  postDate: {
     type : String
   },
  postBy: {
    type : String
  },
  sdetail: {
    type : String
  },
  ldetail: {
    type : String
  }
//   question: [{
//     name: {type: String}, 
//     id: {type: String},
//     ques: {type: String},
//     date: {type: String} 
// }],
// answer: [{
//   name: {type: String}, 
//   id: {type: String},
//   ans: {type: String},
//   date: {type: String}
// }]
}, {
    collection: 'blog',
    versionKey: false
  })

module.exports = mongoose.model('blog', blogSchema)