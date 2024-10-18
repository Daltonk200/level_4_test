const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
  CourseName: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Duration: {
    type: Number, 
    required: true
  },
  InstructorID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor', 
    required: true
  },
  ScheduleID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Schedule', 
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
