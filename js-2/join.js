function join( arr){
    let str= "" ;  
    
 for (let i=0;i<arr.length;i++)
    {
    str += arr[i] + " " ;
    }

return str
}

console.log(join([1,2,3,4,5]));

console.log(join(["pedro",2,"Azucar", 3,4,5]));