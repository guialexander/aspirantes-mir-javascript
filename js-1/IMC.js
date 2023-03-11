function bmi (peso,altura){

const  aux = parseFloat(peso/(altura**2));
return aux
}

console.log(bmi(65,1.8));
console.log(bmi(72,1.6));
console.log(bmi(52,1.75));
