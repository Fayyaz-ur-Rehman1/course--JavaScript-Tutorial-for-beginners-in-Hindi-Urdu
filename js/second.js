document.write("<h1> <center> ALERT BOX </h1> </center><hr>ss")


var a = 100
var b = 500
if (a > b){
    alert("a is greater")
}else{
    alert("b is greater")
}

var a = 50
var b = 40
if(a > b){
    
    alert(a)
}
else{
    alert(b)
}


var a = 100
var b = 500
if (a+b){
    alert(a+b)
}
else{
    alert(a+b)
}

var a = 5000
var b = 1000
if (a > b){
    alert("VALUE OF A :" + a )
}
else{
    alert("VALUE OF B :" + b )
} 

document.write("<h1><center>CONFIRM BOX</center></h1><hr>")

var a = confirm ("myname is fayyaz khilji ?" );
if(a){
    alert("yes")
} else
alert("no")

var b = confirm ("do you like me ?");
if(b){
    alert("thanks")
}
else{
    alert("sorry")
}

document.write("<center><h1>PROMPT BOX </h1></center><hr>")

var a = prompt(" what is your name ?");

document.write(a)
