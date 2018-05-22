var jarangox = require("./class.js");
module.exports = class pos extends jarangox {
    qashel() {
        var xotaker = this.chooseCell(2);
        var gishatich = this.chooseCell(3);
        var poser = xotaker.concat(gishatich);

        if (poser) {
            for (var i in poser) {
                var newX = poser[i][0];
                var newY = poser[i][1];
                if (matrix[newY][newX] == 2) {
                    for (var j in grassEaterArr) {
                        if (newX == grassEaterArr[j].x && newY == grassEaterArr[j].y) {
                            grassEaterArr.splice(j, 1);
                            matrix[newY][newX] = 0;
                        }

                    }
                }
                else if (matrix[newY][newX] == 3) {
                    for (var j in GishatichEater) {
                        if (newX == GishatichEater[j].x && newY == GishatichEater[j].y) {
                            GishatichEater.splice(j, 1);
                            matrix[newY][newX] = 0;
                        }
                    }
                }
            }
        }
    }
}