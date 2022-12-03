var a = [10,20,30,400]

document.write(a + "<br>")

var b = a.some(fay)


 function fay(dan){
    return dan >= 10000
 }
 document.write(b)


 document.write("<hr>")
 var c = [10,20,30,400]

document.write(c + "<br>")

var d = c.every(faya)

document.write(d)
 function faya(dani){
    return dani <= 1000
 } 