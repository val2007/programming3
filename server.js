var express = require("express")
var app = express()

var server = require("http").server(app)
var io = require("socket.io")(server)
var fs = require("fs")

app.use(express.static("."))

app.get("/",function(req,res){
    res.redirect("index.html")
})

server.listen(3000,function(){
    console.log("server is run");
})

//matrix

function matrixGenerate(matLen, gr, grEat, pred, vir, mak) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix.push([])
        for (let j = 0; j < matLen; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }
    for (let i = 0; i < vir; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < mak; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
    return matrix
}

matrix = matrixGenerate(25, 50, 50, 40, 50, 0)

io.sockets.emit("send matrix",matrix)

//arrays

grassArr = []
grassEaterArr = []
predatorArr = []
virusArr = []
makabuycArr = []

//modules

Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Virus = require("./virus")
Makabuyc = require("./makabuyc")

//object creator

function createObject(){
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            }
            else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            }
            else if (matrix[y][x] == 4) {
                let vir = new Virus(x, y)
                virusArr.push(vir)
            }
            else if (matrix[y][x] == 5) {
                let mak = new Makabuyc(x, y)
                makabuycArr.push(mak)

            }
        }
    }
}

io.sockets.emit("send matrix",matrix)

function nkarel(matrix){
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
    // for (let i = 0; i < grassArr.length; i++) {
    //     grassArr[i].mul()
    // }

    // for (let i = 0; i < grassEaterArr.length; i++) {
    //     grassEaterArr[i].eat()
    // }
    // for (let i = 0; i < predatorArr.length; i++) {
    //     predatorArr[i].eat()
    // }
    // for (let i = 0; i < makabuycArr.length; i++) {
    //     makabuycArr[i].eat()
    // }
}

socket.on("send matrix",nkarel)