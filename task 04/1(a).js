let  numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddnumber = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]%2==1){
    oddnumber=oddnumber+" "+numbers[i]
  }
}

console.log(oddnumber)