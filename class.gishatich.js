var jarangox = require("./class.js");
module.exports = class Gishatich extends jarangox {

    eat() {
        var dexin = this.chooseCell(2);
        var index = Math.floor(Math.random() * dexin.length);
        var dexinVandak = dexin[index];
        if (exanak != "cmer") {
            if (dexinVandak) {
                var x = dexinVandak[0];
                var y = dexinVandak[1];
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;
                this.x = x;
                this.y = y;
                this.energy += 1;
                for (var i in grassEaterArr) {
                    var ger = grassEaterArr[i];
                    if (x == ger.x && y == ger.y) {
                        grassEaterArr.splice(i, 1);

                    }

                }


            }
        }
        if (this.energy <= 0) { this.die(); gishatichneriMerneluQanak++;}
        else if (this.energy == 12) { this.mul(); gishatichneriBazmanaluQanak++;}
        else if (!dexinVandak) { this.move(); }

    }
    move() {
        var datark = this.chooseCell(0);
        var index = Math.floor(Math.random() * datark.length);
        var miVandak = datark[index];
        if (miVandak) {
            var x = miVandak[0];
            var y = miVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;
            this.energy--;
        }
    }
    mul() {
        var grassCell = this.chooseCell(1);
        var index = Math.floor(Math.random() * grassCell.length);
        var newCell = grassCell[index];
        this.energy /= 2;
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newGishatich = new Gishatich(newX, newY, this.index);
            GishatichEater.push(newGishatich);
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in GishatichEater) {
            if (GishatichEater[i].x == this.x && GishatichEater[i].y == this.y) {

                GishatichEater.splice(i, 1);
            }
            break;
        }
    }
}