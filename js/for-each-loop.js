var a = ["fayyaz","danish","uzair","ayyaz"];
document.write(a + "<br>")

a.forEach(function( number,name ) {
    document.write( name + " : " + number+ "<br>")
});
document.write("<hr>")
var b = ["fayyaz","danish","uzair","ayyaz"]
document.write(b + "<br>")
a.forEach(function(index , value){
document.write(value + " / " + index + "<br>")
})

