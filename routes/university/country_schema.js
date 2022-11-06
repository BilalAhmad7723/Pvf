const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let contrySchema = new Schema({
  label: {
    type : String
  },
  value: {
    type : String
  },
  code: {
    type : String
  }
}, {
    collection: 'country',
    versionKey: false
  })

module.exports = mongoose.model('country', contrySchema)