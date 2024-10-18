const mongoose = require('mongoose');
const { Schema } = mongoose;

const enrollmentSchema = new Schema({
  StudentID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  CourseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', 
    required: true
  },
  EnrollmentDate: {
    type: Date,
    default: Date.now
  },
  Grade: {
    type: String,
    required: false
  }
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);
module.exports = Enrollment;
