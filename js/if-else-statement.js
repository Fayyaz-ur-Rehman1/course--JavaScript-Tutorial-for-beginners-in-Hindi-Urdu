document.write("<h1>If-Else-Statement</h1>")
var name = "hello i am fayyaz"
var gender = "male"

// 'male' == 'hello i am fayyaz' -> false if(false) -> run into the else block
if(gender == name){
    console.log("hello i am fayyaz")
}else{
    console.log("hello i am girl")
}
document.write("<br>")

var name = "hello girl"
var gender = "female"

if(gender == "male"){
    document.write("hello boy")
}else{
    document.write("hello girl")
}
document.write("<br>")

var a = 100

if (a < 990 ){
    document.write("b is greater")
}else{
    document.write("a is smaller")
}
document.write("<br>")

var b = 1000

if(b > 5000){
    document.write("fayyaz")
}else{
    document.write("uzair")
}
document.write("<br>")
var name = "Fayyaz-ur-Rheman"
var a = ""
var b = 20
if (a > b){
document.write("  write." + name);
}else{
    document.write(" worng." + name)
}