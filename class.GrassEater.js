var jarangox = require("./class.js");
module.exports = class GrassEater extends jarangox {
    move() {
        var datark = this.chooseCell(0);
        var index = Math.floor(Math.random()* datark.length);
        var miVandak = datark[index];
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
        var kanach = this.chooseCell(1);
        var index = Math.floor(Math.random()* kanach.length);
        var kanachVandak = kanach[index];
        if (kanachVandak) {
            var x = kanachVandak[0];
            var y = kanachVandak[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            this.energy += 1;
            for (var i in grassArr) {
                var gr = grassArr[i];
                if (x == gr.x && y == gr.y) {
                    grassArr.splice(i, 1);

                }

            }


        }
        var n = 10;
        if(exanak == "garun")
        {
            n = 15;
        }
        else if(exanak != "garun")
        {
            n = 10;
        }
        if (this.energy >= n) {
            this.mul();
            this.energy = 8;
        }
        if (this.energy == 0) {
            this.die();
            xotakerMerneluQanak++;
        }
        else if (!kanachVandak) {
            this.move();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random()* emptyCells.length);
        var newCell = emptyCells[index];

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            var newGrassEater = new GrassEater(newX, newY, this.index);
            grassEaterArr.push(newGrassEater);
        }
    }
    die() {

        for (var i in grassEaterArr) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1);
                matrix[this.y][this.x] = 0;
            }

        }
    }
}