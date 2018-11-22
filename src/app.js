const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

const createRoute = require('./routes/create');
const searchRoute = require('./routes/search');

app.use(helmet());

app.use('/create', createRoute);
app.use('/search', searchRoute);

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'))
});

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@openfoodbase-ihpnc.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true`, {useNewUrlParser: true}
  )
  .then(result => {
    app.listen(process.env.PORT || 3000);
  })
  .catch(err => {
    console.log(err);
  });