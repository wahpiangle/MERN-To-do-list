const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');

const app = express();
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//this is for POST/PUT requests
app.use(express.json())

//attaches workoutRoutes to /api/workout route
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

//send a message to the main route for the server page
app.get('/', (req, res) => {
    res.send('API is running');
});

//connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests after connecting to database
        const port = process.env.PORT;

        app.listen(port, () => {
            console.log(`now listening at port ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

