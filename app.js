var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
posiKeracneriQanak = 0;
xotakerMerneluQanak = 0;
xotBazmanaluQanak = 0;

app.set('port', process.env.PORT || 3000);

app.use(express.static("public"));
app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(app.get('port'));
var Grass = require("./class.grass.js");
var GrassEater = require("./class.GrassEater.js");
var Gishatich = require("./class.gishatich.js");
var GisXotEater = require("./class.GisXotEater.js");
var pos = require("./class.pos.js");

grassArr = [];
grassEaterArr = [];
GishatichEater = [];
posArr = [];
utox = [];
var utoxQanak = 5;
var posQanak = 1;
var xotQanak = 120;
var xotakerQanak = 110;
var gishatichQanak = 10;
matrix = [];

for (var i = 0; i < 20; i++) {
    matrix[i] = [];
    for (var j = 0; j < 20; j++) {
        matrix[i][j] = 0;
    }
}





while (utoxQanak > 0) {
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    if (matrix[y][x] == 0) {
        utoxQanak--;
        matrix[y][x] = 5;
    }
}
while (posQanak > 0) {
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    if (matrix[y][x] == 0) {
        posQanak--;
        matrix[y][x] = 4;
    }
}
while (xotQanak > 0) {
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    if (matrix[y][x] == 0) {
        xotQanak--;
        matrix[y][x] = 1;
    }
}
while (xotakerQanak > 0) {
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    if (matrix[y][x] == 0) {
        xotakerQanak--;
        matrix[y][x] = 2;
    }
}
while (gishatichQanak > 0) {
    var x = Math.floor(Math.random() * 19);
    var y = Math.floor(Math.random() * 19);
    if (matrix[y][x] == 0) {
        gishatichQanak--;
        matrix[y][x] = 3;
    }
}
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 3) {
            var etr = new Gishatich(x, y, 3);
            GishatichEater.push(etr);
        }
        else if (matrix[y][x] == 2) {
            var et = new GrassEater(x, y, 2);
            grassEaterArr.push(et);
        }
        else if (matrix[y][x] == 4) {
            var posik = new pos(x, y, 4);
            posArr.push(posik);
        }
        else if (matrix[y][x] == 5) {
            var utoxik = new GisXotEater(x, y, 5);
            utox.push(utoxik);
        }
    }
}
num = 0;
exanak = "garun";
setInterval(func, 500);
var obj = {"posiKeracneriQanak":[],
           "xotakerMerneluQanak":[],
           "xotBazmanaluQanak":[],
}


function func() {
    num++;
    if(num % 2 == 0)
    {
        fs.writeFile("posiKeracneriQanak.json", posiKeracneriQanak);
        obj.posiKeracneriQanak.push(posiKeracneriQanak);
        ////////////////////////////////////////////////
        fs.writeFile("xotakerMerneluQanak.json", xotakerMerneluQanak);
        obj.posiKeracneriQanak.push(xotakerMerneluQanak);
        ////////////////////////////////////////////////
        fs.writeFile("xotBazmanaluQanak.json", xotBazmanaluQanak);
        obj.posiKeracneriQanak.push(xotBazmanaluQanak);
    } 
    if (num % 80 == 0) {
        exanak = "garun";
    }
    else if (num % 80 == 20) {
        exanak = "amar";
    }
    else if (num % 80 == 40) {
        exanak = "ashun";
    }
    else if (num % 80 == 60) {
        exanak = "cmer";
    }

    for (var i in grassArr) {
        var obj = grassArr[i];
        obj.mul();
    }
    for (var i in GishatichEater) {
        var obj1 = GishatichEater[i];
        obj1.eat();
    }
    for (var i in grassEaterArr) {
        var obj2 = grassEaterArr[i];
        obj2.eat();
    }
    for (var i in utox) {
        utox[i].eat();
    }
    for (var i in posArr) {
        posArr[i].qashel();
    }
    io.sockets.emit('matrix', matrix);
}

io.on('connection', function (socket) {


});