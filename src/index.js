const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');

//config static file
app.use(express.static(path.join(__dirname, 'public')));

//use Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({
  extended: true 
}));
app.use(express.json());

//Routing
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})