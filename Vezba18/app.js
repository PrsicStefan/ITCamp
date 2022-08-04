//console.log("Hello world!!!");

/* fallsy vrednosti
0
''
null 
undefined
NaN
false*/

//prompt() je imput za skupljanje vrednosti
a = prompt("Unesite prvi broj");
b = prompt("Unesite  drugi broj");
c= prompt("Unesite prvi broj");

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
}
if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else console.log(b, c, a);
}
if (c > a && c > b) {
  if (a > b) {
    console.log(c, a, b);
  } else console.log(c, b, a);
}
