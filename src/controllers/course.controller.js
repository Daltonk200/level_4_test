const Course = require('../models/Course');

// Get all courses
const getAll = async (request, response) => {
    try {
        const courses = await Course.find();
        response.json(courses);
    } catch (error) {
        response.status(500).json({
            error: true,
            message: 'Error retrieving courses'
        });
    }
};

// Get one course by ID
const getOneById = async (request, response) => {
    try {
        const { id } = request.params;
        const course = await Course.findById(id); 
        if (!course) {
            response.status(404).json({ message: 'Course not found' });
        } else {
            response.json(course);
        }
    } catch (error) {
        response.status(500).json({
            error: true,
            message: 'Error retrieving course'
        });
    }
};

// ADD a new course
const createOne = async (request, response) => {
    const body = request.body;

    const newCourse = new Course({
        title: body.title,
        description: body.description,
        instructor: body.instructor,
        duration: body.duration,
    });

    try {
        await newCourse.save();
        response.status(201).json({
            error: false,
            message: 'Course created successfully'
        });
    } catch (error) {
        response.status(500).json({
            error: true,
            message: 'Error saving course'
        });
    }
};

// Edit a course by ID
const updateOneById = async (request, response) => {
    try {
        const { id } = request.params;
        const body = request.body;
        const updatedCourse = await Course.findByIdAndUpdate(id, body, { new: true });
        if (!updatedCourse) {
            response.status(404).json({
                error: true,
                message: 'Course not found'
            });
        } else {
            response.json({ error: false, message: 'Course updated successfully', updatedCourse });
        }
    } catch (error) {
        response.status(500).json({
            error: true,
            message: 'Error updating course'
        });
    }
};

// Delete a course by ID
const deleteOneById = async (request, response) => {
    try {
        const { id } = request.params;
        const deletedCourse = await Course.findByIdAndDelete(id);
        if (!deletedCourse) {
            response.status(404).json({
                error: true,
                message: 'Course not found'
            });
        } else {
            response.json({ error: false, message: 'Course deleted successfuly' });
        }
    } catch (error) {
        response.status(500).json({
            error: true,
            message: 'Error deleting course'
        });
    }
};



module.exports = {
    getAll,
    getOneById,
    createOne,
    updateOneById,
    deleteOneById,
};
