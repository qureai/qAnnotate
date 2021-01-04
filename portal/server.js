const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./app/config/db.config');

const app = express();

let corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// Parse requests of content type - application/json
app.use(bodyParser.json());

// Parse requests of content type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
const db = require('./app/models');

db.mongoose
    .connect('mongodb://localhost:27017/qStudy_db', {
        useNewUrlParser: true,
        // useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to MongoDB.");
    })
    .catch(error => {
        console.error("Connection error ", error);
        process.exit();
    });

// Routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

app.get("/", (req, res) => {
    res.json({ message: "Hello" });
});

// set port to listen requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});