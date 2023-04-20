const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workout');

const app = express();

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

//this is for POST/PUT requests
app.use(express.json())

//attaches workoutRoutes to /api/workout route
app.use('/api/todo', workoutRoutes);

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

