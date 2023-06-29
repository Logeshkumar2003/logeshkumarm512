let stringArray = ["hello world", "javascript is awesome", "title caps"];

for (let i = 0; i < stringArray.length; i++) {
  let words = stringArray[i].split(" ");
  let titleCaseWords = [];

  for (let j = 0; j < words.length; j++) {
    let firstChar = words[j].charAt(0).toUpperCase();
    let restOfWord = words[j].slice(1).toLowerCase();
    let titleCaseWord = firstChar + restOfWord;
    titleCaseWords.push(titleCaseWord);
  }

  stringArray[i] = titleCaseWords.join(" ");
}

console.log(stringArray);
