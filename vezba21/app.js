for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// // arr.length
for (i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}
a = " ";
for (let i = 0; i < arr.length; i++) {
  a += arr[i] + " ";
}
console.log(a);

unos = Number(prompt("Unesite broj"));
arr.push(unos);

while (true) {
  let unos = Number(prompt("Unesite broj"));
  if (unos % 3 == 0 && unos % 5 == 0) {
    break;
  } else {
    arr.push(unos);
  }
}
console.log(arr);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parni = [];
const neparni = [];

for (const broj of arr) {
  if (broj % 2 === 0) {
    parni.push(broj);
  } else {
    neparni.push(broj);
  }
}
console.log("Parni brojevi su", parni);
console.log("Neparni brojevi su", neparni);

//palindrom
