// console.log(var1.includes("word"));

// console.log(var1.split("")); //
// console.log(arr.join[""]); //
// console.log(arr.slice(1, 3)); //od 1 do trece pozicije
// console.log(arr.splice(1, 3)); // od 1 plus 3 pozicije

rec = "sertfvernaiaans";
noviniz = [];
for (let i = 0; i < rec.length; i++) {
  if (!noviniz.includes(rec[i])) {
    noviniz.push(rec[i]);
  }
}

console.log(rec);
console.log(noviniz);
console.log(noviniz.join(""));
