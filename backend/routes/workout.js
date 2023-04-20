const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts, getWorkout } = require('../controllers/workoutController');

//this allows the router to process a GET request to /api/workout
router.get('/', getWorkouts);

//to get single workout
router.get('/:id', getWorkout);

//POST new workout
router.post('/', createWorkout);

//DELETE a workout
router.delete('/:id', (req, res)=>{
    res.json({message: 'DELETE a workout'});
})

//UPDATE a workout
router.patch('/:id', (req, res)=>{
    res.json({message: 'UPDATE a workout'});
})

module.exports = router;