var receta ={

}


receta.nombre= "Sandwich";
receta.ingredientes=[];
receta.ingredientes[0]={
    nombre:"Pan",
    cantidad: 2,
}
receta.ingredientes[1]={
    nombre:"Queso",
    cantidad: 1,
}

console.log(receta.ingredientes[0].nombre);
var sum1 = parseInt(receta.ingredientes[0].cantidad);
var sum2 = parseInt(receta.ingredientes[1].cantidad);

console.log("La suma de las cantidades de los ingredientes es: " + (sum1+sum2) );

console.log(receta);
