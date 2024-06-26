require('dotenv').config()
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const app = express();
const bodyParser = require('body-parser')
const router = require('./src/routes/routes')
const favicon = require('serve-favicon');
require('./src/db/conn')


const static_path = path.join(__dirname, "./public");


// Setting Up view engine and Views Folder
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './template/view'));


// Connecting public Folder / Static Files
app.use("/public", express.static('./public'));
app.use(favicon(path.join(__dirname, './public', 'favicon.ico')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Setting up routes
app.use(router);
const PORT = process.env.PORT || 3300
app.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`);
})

