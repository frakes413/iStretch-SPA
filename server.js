const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Router Requirement
const stretches = require('./routes/api/stretches');
const { allowedNodeEnvironmentFlags } = require('process');

//BodyParser Middleware
app.use(bodyParser.json());

// Statically server everything that lives in the build folder
app.use(express.static(__dirname));
// app.use('./build', express.static(path.resolve(__dirname, './build/bundle.js')));

// Serving index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './client/index.html')));

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