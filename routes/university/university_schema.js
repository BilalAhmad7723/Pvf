const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let uniSchema = new Schema({
  logo:{
    type: String
  },
  name:{
    type: String
  },
  tuition: {
     type : String
   },
   gpa: {
    type : String
  },
  avg_salary: {
    type : String
  },
  rank: {
    type : String
  },
  country_name: {
    type : String
  },
  living_expenses: {
    type : String
  },
  code: {
    type : String
  },
  url: {
    type : String
  },
  slug: {
    type : String
  },
  total_students: {
    type : String
  },
  address: {
    type : String
  }
}, {
    collection: 'university',
    versionKey: false
  })

module.exports = mongoose.model('university', uniSchema)