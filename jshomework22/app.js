suma = "+";
razlika = "-";
mnozenje = "*";
deljenje = "/";
broj2 = "";
broj1 = "";

unos = prompt("Unesite jednu od cetiri aritmeticke operacije +, -, *, /");

if (
  unos === suma ||
  unos === razlika ||
  unos === mnozenje ||
  unos === deljenje
) {
  unos = prompt(
    "Neispravan unos, unesite ponovo jednu od cetiri aritmeticke operacije +, -, *, /"
  );
}

if (unos == suma) {
  broj1 = Number(prompt("Uneiste prvi proj"));
  broj2 = Number(prompt("Uneiste drugi proj"));
  console.log(" Za broj", broj1, "i za broj", broj2, "zbir je", broj1 + broj2);
}
if (unos == razlika) {
  broj1 = Number(prompt("Uneiste prvi proj"));
  broj2 = Number(prompt("Uneiste drugi proj"));
  console.log(
    " Za broj",
    broj1,
    "i za broj",
    broj2,
    "razlika je",
    broj1 - broj2
  );
}
if (unos == mnozenje) {
  broj1 = Number(prompt("Uneiste prvi proj"));
  broj2 = Number(prompt("Uneiste drugi proj"));
  console.log(
    " Za broj",
    broj1,
    "i za broj",
    broj2,
    "proizvod je",
    broj1 * broj2
  );
}
if (unos == deljenje) {
  broj1 = Number(prompt("Uneiste prvi proj"));
  broj2 = Number(prompt("Uneiste drugi proj"));

  if (broj2 !== 0) {
    console.log(
      " Za broj",
      broj1,
      "i za broj",
      broj2,
      "kolicnik je",
      broj1 / broj2
    );
  } else {
    console.log("Ne moze se deliti nulom konju");
  }
} else {
  unos = prompt("Unesite jednu od cetiri aritmeticke operacije +, -, *, /");
}
