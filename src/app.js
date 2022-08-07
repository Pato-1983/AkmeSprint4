//Requerir express y path
const express = require('express')

//Guardar en una constante app la funcionalidad de express()
const app = express()

//Definir el puerto en el que se va a levantar el servidor
const port = process.env.PORT || 3000;

const path = require('path')

const productsRouter = require('./routes/productsRouter.js');
const usersRouter = require('./routes/usersRouter.js');
const mainRouter = require('./routes/mainRouter.js');

//Agregar el middleware para configurar la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, '../public')))

// Acá falta la configuración de nuestra app para poder usar los template engine...
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))

app.use('/products', productsRouter);

app.use('/users', usersRouter);

app.use('/', mainRouter);

app.listen(port, () => console.log(`servidor funcionando en el puerto ${port}! `))