function maxIndex( arr){
    let mI=0;  
    let aux=0;

 for (let i=0;i<arr.length;i++)
 {
     if(arr[i]>=aux){
     mI= i;
     aux=arr[i];
     }
}
if (arr.length == 0){
    mI=-1;
}

return mI

}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1
