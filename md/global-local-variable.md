# GLOBAL AND LOCAL VARIABLE
> diffrence between local and global variable 
local -> not work at outise of function 
BUT
globl -> work at both is side at out side or inside to 
so the pattern is 
```javascript
local variable the value that we write in inside function
function local(){
    var a = ("hlwthis is local variable ")
    document.write(a);
}
local(); 
global that variable we can use at inside and outside also
var a = ("hlw this id global variable")
function global(){
    document.write(a)
}
document.write(a)
```
more code cleck on [global-local-variable.js](../js/global-local-variable.js)