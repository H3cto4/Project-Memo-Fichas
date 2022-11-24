const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-Override');
const session = require('express-session');
const colors = require('colors');
const morgan = require('morgan');
//Inicilización general
const app = express();


//Settings by @hectormolinaweb
app.set('port', process.env.PORT || 8081);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',

  

}));
app.set('view engine', '.hbs');
app.set('json spaces', 2);



//Middleware
app.use(express.urlencoded({extended: false})); 
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));

//uso de morgan
app.use(morgan('dev'));
app.use(express.json());


//Routes

app.use(require('./routes/index'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/users',require('./routes/users'));



//Variables locales


//Static files
app.use(express.static(path.join(__dirname, '/public')));




//Inicialización de server
app.listen(app.get('port'), ()=> {
  console.log('listening on port '.magenta + app.get('port'))
});
