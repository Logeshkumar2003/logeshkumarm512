let a=[1, 2, 3, 4, 5, 6]
let b=4

for (let i=0;i<=b;i++){
  let c=a.pop();
  a.unshift(c)  
  b=b-1
}
console.log(a)