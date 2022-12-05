# object-totorial

---

> now we are here to know aout object object are same as same array details i will try to explain u 
so we get start

```javascript
var a = {
    fname : "fayyazur",
    lname : "rehman",
    age : 17,
    class : "11th",
    gmail : "fayyazurrehman289@gmail.com",
    friendNames : ["danish" , "ayyaz" , "uzair"], 
    family : {
        "fatherName" : "saddiqurehman",
        "motherName" : "farida"
    },
    salary : function(){
        return 2000
    },
    fullName : function(){
      return this.fname + " " + this.lname
    }
}
document.write(a.fullName() + "<br>")
document.write(a.salary() + "<br>")
document.write(a.family.fatherName + "<br>")
document.write(a.family.motherName + "<br>")
```
> this is same file as js 
so i explaining u 
diferrence between (array) and (object)

> array have index 
object have properties 
array index start with 0
object properties start from name 

> now i tell u what i done at the top js file 
first we make variable and named him (a)
then we start from curly braces becouse object stands from curly bracec 
then make properties u can make any kind of named properties but before dotes ( : )
now we call them but i telling u your work showing like this (object,object) in external file becouse we have a special trick to write this in external file 
we can write this in parent and child form like this (document.write(a.fullName()))
okay 
now we can make 
1 - object in object
2 - array 
3 - function

and call them in same as array form 
---
more code cleck on [object.js](../js/object.js)