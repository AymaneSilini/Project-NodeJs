const mywebserver = 'https://evening-escarpment-87282.herokuapp.com';
const axios = require('axios');
const express = require('express');
const path = require('path');
const app = express();
const formidable = require('express-formidable');
const PORT = 3000;
const nodemon = require('nodemon');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(formidable());
app.get('/', (req ,res) => {
    res.render('index', {
        title: 'Welcome'
    })
});

app.get('/planets', (req ,res) => {
    axios.get(`${mywebserver}/planets`)
    .then((results) => {
    res.render('planets', {
        title: 'Planets',
        data: results.data
    })
    }).catch((err)=> res.send(err));
});

app.post('/addplanet', (req ,res) => {
    axios.post(`${mywebserver}/planets`, {
        name: req.fields.name,
        color: req.fields.color,
        icon: req.fields.icon
    })
    .then((results) => {
        res.redirect('/planets');
    }).catch((err) => res.send(err));
});

app.post('/putplanet', (req ,res) => {
    axios.put(`${mywebserver}/planets/${req.fields.id}`, {
        name: req.fields.name,
        color: req.fields.color,
        icon: req.fields.icon
    })
    .then((results) => {
        res.redirect('/planets');
    }).catch((err) => res.send(err));
});

app.post('/deleteplanet', (req, res) => {
    axios.delete(`${mywebserver}/planets/${req.fields.id}`)
    .then((results) => {
        res.redirect('/planets');
    }).catch((err) => res.send(err));
});





app.listen(PORT, ()=>{
    console.log(`listening to port ${PORT}`);
});