const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Router Requirement
const stretches = require('./routes/api/stretches');

//BodyParser Middleware
app.use(bodyParser.json());

// DB Configuration & Connection
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(err));

// Stretches API Route Handler
app.use('/api/stretches', stretches);
  
// Port Set-Up
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port no. ${PORT}...`));