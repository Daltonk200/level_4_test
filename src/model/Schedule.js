const mongoose = require('mongoose');
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  CourseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course', 
    required: true
  },
  StartDate: {
    type: Date,
    required: true
  },
  EndDate: {
    type: Date,
    required: true
  },
  StartTime: {
    type: String, 
    required: true
  },
  EndTime: {
    type: String,
    required: true
  },
  Classroom: {
    type: String,
    required: true
  }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;
