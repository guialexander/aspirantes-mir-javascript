function max( arr){
       let maximo=0;  

    for (let i=0;i<arr.length;i++)
    {
        if(arr[i]>=maximo){
        maximo= arr[i];
        }
}

if (arr.length == 0){
    maximo = undefined;
}
return maximo

}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined