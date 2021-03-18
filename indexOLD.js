var watch = require('node-watch');
const express = require('express');
var fs = require('fs')
var filePath = 'test.txt'
var file = fs.readFileSync(filePath, 'utf8')
console.log(file)

fs.watch(filePath, function(curr, prev){
    console.log("el archivo cambio")
    file = fs.readFileSync(filePath, 'utf8')
    console.log("el archivo ahora contine", file)
})
