let a=[1,3,2,4,4,5,3,4,6,5,7,8,9,7,6,4,9,2,4,5,6,7,8,2]
let b=[]
for (var i=0;i<a.length;i++){
  if (b.indexOf(a[i])===-1){
  b.push(a[i])
}
}
console.log(b)