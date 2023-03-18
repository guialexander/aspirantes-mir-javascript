
        //const resultado = document.querySelectorAll('#resultado');// otra forma de selecionar 
        //const input = document.querySelectorAll("#texto");// otra forma de selecionar  

const input = document.querySelector("#texto");
const resultado = document.querySelector('#resultado')

input.addEventListener('input', function() {
    const texto = input.value.toUpperCase(); // Código para convertir el texto a mayúsculas y mostrarlo en el párrafo
    //resultado.textContent = texto;
    console.log(texto);   
    let boton = document.querySelector(".btn");
    console.log(boton);
    boton.addEventListener("click", function() {
    resultado.textContent = texto;
  }); 
    
  });



  
console.log(input);
console.log(resultado);