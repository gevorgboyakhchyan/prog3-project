var jarangox = require("./class.js");
module.exports = class Grass extends jarangox {
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length);
        var newCell = emptyCells[index];
        if (exanak == 'amar') {
            if (newCell && this.multiply >= 15) {
                var newX = newCell[0];
                var newY = newCell[1];
                matrix[newY][newX] = 1;
                var newGrass = new Grass(newX, newY, this.index);
                grassArr.push(newGrass);
                this.multiply = 0;
                xotBazmanaluQanak++;
            }
        }
    }
}