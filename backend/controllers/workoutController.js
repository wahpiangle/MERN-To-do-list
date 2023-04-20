const Workout = require('../models/workoutModel');

//get all workouts


//get a single workout


//create new workout
const createWorkout = async (req, res) => {
    const { title, reps, weight } = req.body;
    try {
        const workout = await Workout.create({ title, reps, weight }); //create instance of Workout model
        res.status(200).json({ workout }); //response's status is set to ok and converted to json
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//delete a workout


//update a workout


module.exports = {
    createWorkout,
}