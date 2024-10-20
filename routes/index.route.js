const { Router } = require('express');
const router = Router();

const courseController = require('../src/controllers/course.controller.js');
const courseMiddleware = require('../src/middlewares/course.middleware.js');

router.get('/courses', courseController.getAll);
router.get('/courses/:id', courseController.getOneById);
router.post('/courses', courseMiddleware.create, courseController.createOne);
router.put('/courses/:id', courseMiddleware.create, courseController.updateOneById);
router.delete('/courses/:id', courseController.deleteOneById);


module.exports = router;
