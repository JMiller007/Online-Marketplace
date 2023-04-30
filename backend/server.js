const express = require('express');
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(session({
    secret: "listit",
    resave: true,
    saveUninitialized: true
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { dbName: 'listit' });
const connection = mongoose.connection;
connection.once('open', () =>
{
    console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () =>
{
    console.log(`Server is running on port: ${port}`);
});