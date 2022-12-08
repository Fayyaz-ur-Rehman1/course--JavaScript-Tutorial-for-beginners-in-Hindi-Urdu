document.write("<h1>Length-Method</h1>")

var a = "my name is fayyaz"
var b = a.length;

document.write(b)


document.write("<hr>")

document.write("<h1>To-Lower-Case</h1>")

var c = "My Name Is Fayyaz"
var d = c.toLowerCase();

document.write(d)


document.write("<hr>")


document.write("<h1>To-Upper-Case</h1>")

var e = "My Name Is Fayyaz"
var f = e.toUpperCase();

document.write(f)


document.write("<hr>")


document.write("<h1>Include-Method</h1>")

var g = "My Name Is Fayyaz"
var h = g.includes("Fayyaz")

document.write(h)


document.write("<hr>")


document.write("<h1>startswith</h1>")

var i = "My Name Is Fayyaz"
var j = i.startsWith("My");

document.write(j)


document.write("<hr>")
document.write("<h1>endswith</h1>")

var k = "My Name Is Fayyaz"
var l = k.endsWith("Fayyaz");

document.write(j)


document.write("<hr>")
document.write("<h1>search</h1>")

var m = "My Name Is Fayyaz"
var n = m.search("Is");

document.write(n)


document.write("<hr>")
document.write("<h1>match-methods</h1>")

var o = "My Name Is Fayyaz"
var p = o.match(/y/g);

document.write(p)


document.write("<hr>")

document.write("<h1>index-of-methd</h1>")

var q = "My Name Is Fayyaz and my hobbi Is a special cooder"
var r = q.indexOf("Is");

document.write(r)


document.write("<hr>")
document.write("<h1>Last-Index-If-Method</h1>")

var s = "My Name Is Fayyazand my hobbi Is a special cooder"
var t = s.lastIndexOf("Is");

document.write(t)


document.write("<hr>")
document.write("<h1>Replace-Method</h1>")

var u = "My Name Is Fayyaz and my hobbi is a special cooder"
var v = u.replace("Fayyaz","fayyazurrehman");

document.write(v)


document.write("<hr>")
document.write("<h1>Trim-Method</h1>")

var tt = "              fayyaz             "
var ttt = tt.trim()
document.write(ttt)
// this method will reduse you extra space