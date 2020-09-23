const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = '';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => console.log("Connected with Database"))
  .catch((err) => console.log(err));

//importing Routes
const authRoutes = require("./routes/authRoutes.js");





// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));



//Router Middlewares
app.use(authRoutes);


app.listen(3000, ()=>{
  console.log("Server listening");
})