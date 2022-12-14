var a = document.getElementById("l1").children[0];
var b = a.cloneNode(true)

// console.log(b)
var c = document.getElementById("l2")
c.appendChild(b)