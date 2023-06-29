let a = ["level", "hello", "racecar", "world", "madam"];
let b=[]
for (let i=0;i<a.length;i++){
  let c=a[i].split('').reverse().join('');
  if (a[i]==c){
    b=b+" "+c
  }
}

console.log(b)
