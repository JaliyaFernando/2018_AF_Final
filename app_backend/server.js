const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const PORT = 4000;
const mongoose = require('mongoose');
const config = require('./db.js');
const cors = require('cors')

const subjectRoute = require('./routes/subjectRoute');
const courseRoute = require('./routes/courseRoute');

mongoose.promise = global.Promise;
mongoose.connect(config.db,{userNewUrlParser: true}).then(
    () => {console.log('Database is connected')},
    err => {console.log('Unable to connect to database')}
);
app.use(cors());
app.use(BodyParser.json());

app.use('/subject', subjectRoute);
app.use('/course', courseRoute);
app.listen(PORT, function () {
    console.log('Server is running')
});
