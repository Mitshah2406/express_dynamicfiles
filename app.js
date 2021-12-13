const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port =5500;

const app = express();


app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, '/static')))

hbs.registerPartials(path.join(__dirname,'/views/partials'))
app.get('/', (req, res)=>{
    res.render('index')
})
app.listen(port,()=>{
    console.log('listening on port');
})