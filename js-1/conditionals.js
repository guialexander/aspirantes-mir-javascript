function calcularColor (num)
{
var color;
   if (num===1){
    color = "Negro";

   }
   else if (num===2){
    color = "Blanco";
    
   }
   else if (num===3){
    color = "Rojo";

   }
   else {

    color = "Verde";
   }

   color= "El color es " + color;

    return color
}

console.log(calcularColor(1));
console.log(calcularColor(2));
console.log(calcularColor(3));
console.log(calcularColor(8));