console.log("hello");

const output = ["1", "2", "0", "false", "False", "FALSE", "true", "", null, undefined].filter(
  Boolean,
);
console.log(output);
console.log(`${Boolean("0")}`);

//
export const ALLOWED_LOG_LEVELS = [
  "silent",
  "fatal",
  "error",
  "warn",
  "info",
  "debug",
  "trace",
] as const;
export const ALLOWED_LOG_LEVELS_ = ["silent", "fatal", "error", "warn", "info", "debug", "trace"];
console.log(typeof ALLOWED_LOG_LEVELS);
console.log(typeof ALLOWED_LOG_LEVELS_);

// const string_number_tuple = [1, 2, "amy", "bob"] as const;
// const withExtra = Object.assign(string_number_tuple, {
//     foo: "foo",
//     bar: "bar",
// } as const);
// type NumberType = typeof string_number_tuple[number];
// type StringType = (typeof withExtra)["foo" | "bar"];

console.log("".trim() ? "true" : "false");
console.log("a".trim() ? "true" : "false");
