var s = [
  ["fayyaz","class-11th","saddiqurrehman"],
  ["danish","class-11th","imran"],
  ["uzair", "class-9th","anwar"],
  ["ayyaz","class-9th","fzlu"]
]
for(var f = 0 ; f < 4; f++){
    for(var g = 0; g <= 2 ; g++){
   document.write(s[f][g]+ "/ ")
    }
    document.write("<br>")
    }
    document.write("<hr>")

var g = [
    [2+2,2-2,3*3],
    [5-2,3+4,3*0],
]
for(var h = 0 ; h < 2; h++ ){
    for (var j = 0; j < 3 ; j++){
        document.write(g[h][j] + " ")
    }
    document.write("<br>")
}
// a[][]