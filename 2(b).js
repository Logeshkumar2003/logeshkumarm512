const strings = ["hello", "world", "javascript"];

const titleCaps = strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCaps);
