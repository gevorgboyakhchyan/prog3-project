var side = 20;
guyn = "";

function setup() {
    socket = io.connect('http://localhost:3000');
    createCanvas(20 * side, 20 * side);
    background('#acacac');
    socket.on("matrix", gcel);
    socket.on("exanak",function(exanak){
    if(exanak == "garun")
    {
        guyn = "#cef442";
    }
    else if(exanak == "amar")
    {
        guyn = "#f45c42";
    }
    else if(exanak == "ashun")
    {
        guyn = "#41f48f";
    }
    else if(exanak == "cmer")
    {
        guyn = "#41bef4";
    }
});
}

function gcel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(guyn);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
}
