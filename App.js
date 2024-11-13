const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;
const pagesRoutes = require('./routes/pages');
//const path = require('path');

// const srcDirectory = path.join(__dirname,"/src");
// app.use(express.static(srcDirectory));
app.use('/src',express.static('src'))

//Template View Engine setUp
app.set('view engine', 'ejs');
app.set("views", "./views")
//End

//Routes
app.use('/', pagesRoutes);
//End
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))