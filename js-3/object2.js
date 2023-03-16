var persona = {
    nombre: "Alex",
    edad: 20,
    ciudad: "Bogota",
    profesion: "Futbolista",
}

function presentacion (persona)
{
    persona=persona;

    return persona.nombre + " " + persona.edad + " " + persona.ciudad;



}


console.log (persona);
var mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies=["futbol","Bolos","Bolirana","Bailar", "Billar"];
console.log(persona.hobbies);
console.log("Los hobbies son:");

for(let i in persona.hobbies){
    console.log(i,":",persona.hobbies[i])
  }