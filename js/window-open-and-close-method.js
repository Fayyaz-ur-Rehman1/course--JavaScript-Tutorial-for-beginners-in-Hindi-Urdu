// var a;
// function fn(){
//     a = window.open("https://www.youtube.com/watch?v=tkMZ5n8EObk&list=PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf&index=86&ab_channel=YahooBaba","fayyaz","height=100px,width=100px")
// }
// function fnn(){
//     a.close()
// }


// var a = ["fayyaz","danish","uzair","ayyaz"]
// var b = ["sahle","sahanawaz","umer"]
// var c = ["uzair ahmad","ali asger"]
// var d = ["zunaid"]
// var e = a.concat(b,c,d+"<br>")
// document.write(e)
// var f = e.join(" / ")
// document.write(f)


// var a = ["fayyaz","danish","uzair","ayyaz","shaif"]
// document.write(a + "<br>")
// var b = a.slice(1,5)
// document.write(b + "<br>")

// var n = ["fayyaz","danish","uzair","ayyaz","shaif"]
// n.splice(2,3,"hello guys")
// document.write(n)


// var m = ["fayyaz"]
// var h = 19
// var g = "danish"
// document.write(m,h,g+ "<br>")

// var j = Array.isArray(m)
// document.write(j)


// var a = [10,20,30,40,50,60,70]
// document.write(a + "<br>")
// var b = a.some(fayyaz)
// document.write(b)

// function fayyaz(a){
//     return a >= 50
// }


// var a = [10,20,30,40,50,60,70]
// document.write(a + "<br>")
// var b = a.every(fayyaz)
// document.write(b)

// function fayyaz(a){
//     return a >= 3
// }


// var z = [10,20,30,40,50,60,70,80,90,100]
// document.write(z + "<br>")
// var x = z.find(fayyaz)
// document.write(x)

// function fayyaz(z){
// return z >= 11
// }


// var z = [10,20,30,40,50,60,70,80,90,100]
// document.write(z + "<br>")
// var x = z.findIndex(fayyaz)
// document.write(x)

// function fayyaz(z){
// return z >= 43
// }



// var z = [10,20,30,40,50,60,70,80,90,100]
// document.write(z + "<br>")
// var x = z.filter(fayyaz)
// document.write(x)

// function fayyaz(z){
// return z >= 35
// }


// var a = ["fayyaz","danish","ram","karan"]
// a.toString();
// document.write(a)


// var a = ["fayyaz","danish","ram","karan"]
// a.fill("rehman");
// document.write(a)


// var a = ["fayyaz","danish","ram","karan"]
//  a.valueOf()
//   document.write(a)

document.write("<hr>")

var a = ["fayyaz","danish","ram","karan"]
a.forEach(loop)
function loop(name , index){
    document.write(index+ " : " + name +"<br>")
}