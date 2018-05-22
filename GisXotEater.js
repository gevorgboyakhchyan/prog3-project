var jarangox = require("./class.js");
module.exports = class GisXotEater extends jarangox {
    
    move() {
        var datark = this.chooseCell(0);
        var miVandak = random(datark);
        if (miVandak) {
            var x = miVandak[0];
            var y = miVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = this.index;
            this.x = x;
            this.y = y;
        }
        this.energy -= 1;
    }
    eat() {
        var dexin = this.chooseCell(2);
        var dexinVandak = random(dexin);
        var karmir = this.chooseCell(3);
        var karmirVandak = random(karmir);
        if (dexinVandak) {
            var x = dexinVandak[0];
            var y = dexinVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 5;
            this.x = x;
            this.y = y;
            this.energy += 1;
            for (var i in grassEaterArr) {
                var gre = grassEaterArr[i];
                if (x == gre.x && y == gre.y) {
                    grassEaterArr.splice(i, 1);
                }
            }
        }
        else if (karmirVandak) {
            var x = karmirVandak[0];
            var y = karmirVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 5;
            this.x = x;
            this.y = y;
            this.energy += 1;
            for (var i in GishatichEater) {
                var gre = GishatichEater[i];
                if (x == gre.x && y == gre.y) {
                    GishatichEater.splice(i, 1);
                }
            }
        }
        if (this.energy <= 0) {
            this.die();
        }
        else if (!dexinVandak && !karmirVandak) {
            this.move();
        }
    }
    die() {
        for (var i in utox) {
            var ut = utox[i];
            if (this.x == ut.x && this.y == ut.y) {
                utox.splice(i, 1);
                matrix[this.y][this.x] = 0;

            }
        }
    }
}