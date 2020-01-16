const express = require('express'); // Importing the package
const app = express(); // Execute the package
const mongoose = require('mongoose');
require('dotenv/config'); 
// require('dotenv').config();

// Middlewares

/*app.use(auth);

app.use('/pizza', () => {
    console.log('Middleware is currently running');
});*/


//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


// ROUTES 
app.get('/', (req,res) => { // "get" Shoots back a message (Note that "post" sends a message)
    res.send('I can make a web server yippeeeee!');
});

app.get('/posts', (req,res) => { // "get" Shoots back a message (Note that "post" sends a message)
    res.send('Sorry no posts ):');
});

const port = process.env.PORT;

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, { useUnifiedTopology: true }, () => { // Get a pathway to your cluster in Mongoose so you can connect to mongo DB
    console.log('Connected to DB!');
});
// process.env.DB_CONNECTION, 
// How do we start listening to the server?
app.listen(3000); 