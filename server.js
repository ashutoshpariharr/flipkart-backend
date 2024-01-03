require('dotenv').config(); // Import and execute dotenv.config()

const express = require('express');
const Connection = require('./database/db.js');
const defaultt = require('./defaultt.js');
const Router = require('./routes/router.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect to middleware
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.get('/', function(req, res){
    res.send('hello world'); 
});


// Configuration from env file
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8000;

const URL = process.env.MONGODB_URI || `mongodb+srv://${user}:${password}cluster0.6zm2yca.mongodb.net/ecommers?retryWrites=true&w=majority`;

Connection(URL);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

defaultt();
