//GUES NUMBER
guesnumber = 50;
unos = Number(prompt("Unesite broj"));
while (true) {
  if (guesnumber === unos) {
    console.log("You are lucky man");
    break;
  }
  if (guesnumber > unos) {
    console.log("Uneti broj je manji od tacnog broja");
    unos = Number(prompt("Unesite broj ponovo"));
  }
  if (guesnumber < unos) {
    console.log("Uneti broj je veci od tacnog broja");
    unos = Number(prompt("Unesite broj ponovo"));
  }
}
