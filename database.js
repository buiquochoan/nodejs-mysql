var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs'
});

var connect = function (){
    connection.connect(function (err) {
        if(!err) {
            console.log('database is connected !!');
        } else {
            console.log('database connect fail');
        }
    })
}

var closeDb = function() {
    connection.end(function(err) {
        if(!err) console.log("closed db");
    });
}

exports.getAllUser = function (callbackQuery) {
    connect();
    connection.query("select * from users", function (err, result, fields) {
        if (!err) {
            callbackQuery(result);
        } else {
            console.log(err);
        }
    })
}