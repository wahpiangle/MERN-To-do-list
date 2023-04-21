const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

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