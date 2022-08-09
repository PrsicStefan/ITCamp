broj = Number(prompt("Unesite broj redova"));
star = "*";
for (i = 1; i <= broj; i++) {
  console.log(star);
  star = star + "*";
}

broj = Number(prompt("Unesite broj redova"));

for (i = 1; i <= broj; i++) {
  for (j = 1; j <= i; j++) {
    console.log(i);
  }
}

1;
12;
123;
1234;
12345;
123456;

k = 0;
broj = Number(prompt("Unesite broj"));
for (i = 1; i <= broj; i++) {
  for (j = 1; j <= i; j++) {
    k = k + 1;
    console.log(k);
  }
}

1;
12;
123;
1234;
12345;

broj = Number(prompt("Unesite broj redova"));
star = "";
for (i = 1; i <= broj; i++) {
  console.log(star);
  star = star + i;
}

1;
23;
456;
78910;

broj = Number(prompt("Unesite broj koji zelite"));
for (i = 0; i <= broj; i++) {
  for (j = 0; j <= i; j++) {
    console.log();
  }
}

1;
23;
456;
78910;
