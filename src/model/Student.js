const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
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
  EnrollmentDate: {
    type: Date,
    default: Date.now
  },
  DateOfBirth: {
    type: Date,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
