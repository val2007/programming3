var socket = io()

var side = 30;

function setup() {
    frameRate(5);
    createCanvas(25 * side, 25 * side);
    background('#acacac');
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            }
            else if (matrix[y][x] == 5) {
                fill("orange")
            }
            rect(x * side, y * side, side, side);
        }
    }
    for (let i = 0; i < grassArr.length; i++) {
        grassArr[i].mul()
    }

    for (let i = 0; i < grassEaterArr.length; i++) {
        grassEaterArr[i].eat()
    }
    for (let i = 0; i < predatorArr.length; i++) {
        predatorArr[i].eat()
    }
    for (let i = 0; i < makabuycArr.length; i++) {
        makabuycArr[i].eat()
    }
}