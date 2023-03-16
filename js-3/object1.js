var pedro= {
    nombre : "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies : ["programar","squash", "piano"]
}

function saludar (persona) {
    persona=persona;
    aux= "Hola, me llamo "+ persona;
    return  aux

}

//console.log(pedro["edad"]);
pedro.Estatura= 1.8;
//console.log(pedro);



delete pedro.activo;
//console.log(pedro);

/*for (var llave in pedro) {
    if (pedro.hasOwnProperty(llave)) {
        console.log(`${llave} : ${pedro[llave]}`)
    }
  }
*/

  for(let i in pedro){
    console.log(i,":",pedro[i])
  }

  console.log(saludar(pedro.nombre));