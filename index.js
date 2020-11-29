const express = require('express');
const path = require('path');
const exphbs = require ('express-handlebars');
const app = express();
const homeRoutes = require('./routes/home');
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const hbs = exphbs.create({
    dafaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use('/', homeRoutes);
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>{
    console.log(`Console is running on port ${PORT}`);
})