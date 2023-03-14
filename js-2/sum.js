function sum( arr){
    let contador=0;

for (let i=0;i<arr.length;i++)
{

 contador=contador+ arr[i];
}
return contador

}

console.log(sum([1,2,3])); //6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
