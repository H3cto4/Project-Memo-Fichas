const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const colors = require('colors');
//Inicilización general
const app = express();

//Settings by @hectormolinaweb
app.set('port', process.env.PORT || 8081);
app.set('views', path.join(__dirname, 'views'));
app.set('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',

}));
app.set('view engine', '.hbs');
//Middleware

//Variables locales

//Routes

//Static files


//Inicialización de server
app.listen(app.get('port'), ()=> {
  console.log('listening on port '.magenta + app.get('port'))
});