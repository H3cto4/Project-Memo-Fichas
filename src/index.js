const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-Override');
const session = require('express-session');
const colors = require('colors');
//Inicilización general
const app = express();

//Settings by @hectormolinaweb
app.set('port', process.env.PORT || 8081);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '/public')));
app.engine('.hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs',

  

}));
app.set('view engine', '.hbs');


//Routes

app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));


//Middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true,
}));

//Variables locales





//Static files


//Inicialización de server
app.listen(app.get('port'), ()=> {
  console.log('listening on port '.magenta + app.get('port'))
});
