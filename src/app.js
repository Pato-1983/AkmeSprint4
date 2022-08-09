const express = require('express')

const app = express()

const port = process.env.PORT || 3000;
const path = require('path')
const methodOverride = require('method-override')

const productsRouter = require('./routes/productsRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const mainRouter = require('./routes/mainRouter.js');

app.use(express.static(path.join(__dirname, '../public')))

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/', mainRouter);

app.listen(port, () => console.log(`servidor funcionando en el puerto ${port}! `))