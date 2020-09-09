const express = require('express');
const app = express();
var path = require('path');
const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'))

app.get('/', function(req, res){
    let home = path.resolve('./src/home.js')
    res.sendFile(home)
});

app.get('/heroes', function(req, res){
    let heroes = path.resolve('./data/heroes.json')
    res.sendFile(heroes)
})

app.listen(3030, () => console.log('Server running in 3030 port'));

