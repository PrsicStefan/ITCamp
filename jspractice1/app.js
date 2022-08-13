//   *
//  *  *
// *  *  *
//  *  *
//   *

unos = Number(prompt("Unesite broj zvezdica"));
space = "";
star = "";

for (i = 1; i <= unos; i++) {
  // Make space
  for (j = 0; j <= unos - i; j++) {
    space += " ";
  }
  // adding stars to space
  for (k = 0; k < 2 * i - 1; k++) {
    space += "* ";
  }
  space += "\n";
}

for (i = 1; i <= unos - 1; i++) {
  // make space
  for (j = 0; j <= i; j++) {
    space += " ";
  }
  for (k = (unos - i) * 2 - 1; k > 0; k--) {
    space += "* ";
  }
  space += "\n";
}
console.log(space);
