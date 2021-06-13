var express = require('express');
var database = require('./database');
var app = express();

app.get('/listUser', function(req, res) {
    database.getAllUser(function (resultQuery) {
        res.json(resultQuery);
    })
});

app.listen(3000);