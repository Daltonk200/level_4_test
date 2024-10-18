const mongoose = require('mongoose');
const { Schema } = mongoose;

const instructorSchema = new Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  Phone: {
    type: String,
    required: true
  },
  Expertise: {
    type: String,
    required: true
  }
});

const Instructor = mongoose.model('Instructor', instructorSchema);
module.exports = Instructor;
