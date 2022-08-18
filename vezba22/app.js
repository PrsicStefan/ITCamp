// const a =
//   "AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBABABABABABABABABABABABABABABABABABABABABABABABABABABAAAAAAAAAAAAAAAAAAAAAAAAAAA";
// const b =
//   "AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

// console.log(a[a.length - 1]);
// unos = prompt("Uniste rec");
// if (unos.length > 10) {
//   console.log(`${unos[0]} ${unos.length - 2} ${unos[unos.length - 1]}`);
// }

// const niz = rec.split("");

// const rec = "sevenkplus";
// const niz = rec.split("");
// const razlika = new Set(niz);
// for (let i = 0; i < niz.length; i++) {
//   for (let j = i + 1; j < niz.length; j++) {
//     if (niz[i] === niz[j]) {
//       niz[j] = "";
//     }
//   }
// }

// let brojac = 0;
// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] !== "") {
//     brojac++;
//   }
// }
// console.log(razlika);
// if (razlika.size % 2 === 0) {
//   console.log("CHAT WITH HER!");
// } else {
//   console.log("IGNORE HIM!");
// }

const rec = "sevenkplus";
const niz = rec.split("");
// const razlika = new Set(niz)
// for(let i = 0; i < niz.length; i++){
//     for(let j = i + 1; j < niz.length; j++) {
//         if(niz[i] === niz[j]){
//             niz[j] = ''
//         }
//     }
// }
// let brojac = 0;
// for(let i = 0; i < niz.length; i++) {
//     if(niz[i] !== '') {
//         brojac++
//     }
// }
console.log(niz);
uniq = [];
for (i = 0; i < niz.length; i++) {
  if (!uniq.includes(niz[i])) {
    uniq.push(niz[i]);
  }
}
console.log(uniq.join(""));
// console.log(razlika);
// if(razlika.size % 2 === 0) {
//     console.log("CHAT WITH HER!");
// } else {
//     console.log("IGNORE HIM!");
// }
