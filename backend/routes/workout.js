const express = require('express');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const requireAuth = require('../middleware/requireAuth');
const router = express.Router();

//to fire requireAuth middleware before all the routes
router.use(requireAuth)

//this allows the router to process a GET request to /api/workout
router.get('/', getWorkouts);

//to get single workout
router.get('/:id', getWorkout);

//POST new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router;