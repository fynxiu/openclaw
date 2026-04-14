console.log("hello");

const output = ["1", "2", "0", "false", "False", "FALSE", "true", "", null, undefined].filter(
  Boolean,
);
console.log(output);
console.log(`${Boolean("0")}`);
