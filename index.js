// Run `node index.js` in the terminal

console.log(`Hello Node v${process.versions.node}!`);

let c = Add(10.2, 20.4);
console.log(c);

function Add(a, b) {
  return a + b;
}
