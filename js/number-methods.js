document.write("<h1>Number-Method</h1>")
var a = "456"
var b = Number(a)
document.write(b+133)

document.write("<h1>Parselnt-Method</h1>")
var a = "4.12"
var b = parseInt(a)
document.write(b)

document.write("<h1>Parse-float-Method</h1>")
var a = "4.112 112"
var b = parseFloat(a)
document.write(b)


document.write("<h1>isFinit-Method</h1>")
var a = "4.1221"
var b = parseFloat(a)
document.write(b)

document.write("<h1>Parse-float-Method</h1>")
var a = "4.112 112"
var b = parseFloat(a)
document.write(b + "<br>")

document.write("<h1>isFinite-Method</h1>")

var a = 4.111111
var b = Number.isFinite(a)
document.write(b)


document.write("<h1>isInteger-Method</h1>")

var a = 4111111
var b = Number.isInteger(a)
document.write(b)

document.write("<h1>tofixed-Method</h1>")

var a = 4.123456;

var b = a.toFixed(4)
document.write(b)

document.write("<h1>topresision-Method</h1>")

var a = 4.12345678;
var b = a.toPrecision(8)
document.write(b)