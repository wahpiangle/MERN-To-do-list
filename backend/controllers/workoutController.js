const { default: mongoose, Mongoose } = require('mongoose');
const Workout = require('../models/workoutModel');

//get all workouts
const getWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find({}); //find all workouts
        res.status(200).json(workouts); //response's status is set to ok and converted to json
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

//get a single workout
const getWorkout = async (req, res) => {
    //route parameter at the end of the url
    const { id } = req.params;
    try {
        const workout = await Workout.findById(id);
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ message: 'Workout not found' })
        }
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({ error: err.message })
    }

}

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
const deleteWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ message: 'Workout not found' })
    }

    const workout = await Workout.findOneAndDelete({_id: id});

    if(!workout){
        return res.status(404).json({ message: 'Workout not found' })
    }

    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async(req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ message: 'Workout not found' })
    }

    const workout = await Workout.findOneAndUpdate({ _id : id }, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({ message: 'Workout not found' })
    }

    res.status(200).json(workout)
}


module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}