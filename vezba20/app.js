// broj = Number(prompt("Unesite broj"));

// for (i = 1; i <= broj; i++) {
//   k = "";
//   for (j = 1; j <= i; j++) {
//     k += i;
//   }
//   console.log(k);
// }

//     1
//   1   2
//   1  2  3
// unos = Number(prompt("Unesi broj"));
// zvezdice = "";
// broj = 1;
// for (i = 1; i <= unos; i++) {
//   for (j = 1; j <= unos - i; j++) {
//     zvezdice += " ";
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     zvezdice += broj;
//     broj++;
//   }
//   zvezdice += "\n";
// }
// console.log(zvezdice);
// let n = 3;
// let count = 1;
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // creating spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // creating numbers
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);

// unos = Number(prompt("Unesite broj kolona"));
// space = " ";
// broj = 1;
// for (i = 1; i <= unos; i++) {
//   for (j = 1; j <= unos - i + 1; j++) {
//     space += " ";
//   }
//   for (k = 1; k <= 2 * i - 1; k++) {
//     space += broj + " ";
//     broj++;
//   }
//   space += "\n";
// }
// console.log(space);

// unos = Number(prompt("Unesite broj redova"));
// space = " ";
// brojac = 1;
// for (i = 1; i <= unos; i++) {
//   for (j = 1; j < i; j++) {
//     space += " ";
//   }
//   for (k = 1; k <= 2 * (unos - i + 1) - 1; k++) {
//     space += i;
//   }
//   space += "\n";
// }
// console.log(space);

// 1 2 3 4 5 6  8 9 10

// unos = Number(prompt("Unesite broj"));

// for (i = 1; i <= unos; i++) {
//   if (i !== 7) {
//     console.log(i);
//   }
// }

// Zbir prvih 20 brojeva
// zbir = 0;
// for (i = 1; i < 20; i++) {
//   if (i % 2 === 1) {
//     continue;
//   }

//   zbir += i;
//   console.log("Nakon borja", i, "zbir je", zbir);
// }

// unos = Number(prompt("Unesite prirodni broj"));
// broj = "";
// for (i = 1; i <= unos; i++) {
//   for (j = 1; j <= unos; j++) {
//     if (i % j === 0) {
//       broj += j + " ";
//     }
//   }
//   console.log("Delitelj broja", i, "su brojevi", broj);
// }

broj = 52;
unos = Number(prompt("Unesite vas broj"));

while (unos !== broj) {
  if (unos === 0) {
    console.log("Ne kucaj 0 konju");
    break;
  }
  if (unos < broj) {
    console.log("Broj je manji od tacnog");
  } else if (unos > broj) {
    console.log("Broj je manji od tacnog");
  } else if (unos === broj) {
    console.log("Broj je tacan");
  }
}
