broj = Number(prompt("Unesite broj veci od 0"));
for (i = 1; i <= broj; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log("Buzz");
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Fizz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else {
    console.log(i);
  }
}

broj = Number(prompt("Unesite broj"));
for (i = 1; i <= broj; i++) {
  cube = i ** 3;
  console.log("Kvadrat broja", i, "je", cube);
}
