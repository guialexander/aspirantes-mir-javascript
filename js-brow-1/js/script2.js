const input = document.querySelector("#texto");
const resultado = document.querySelector('#resultado')

input.addEventListener('input', function() {
    const texto = input.value.toLowerCase(); // Código para convertir el texto a mayúsculas y mostrarlo en el párrafo
    //resultado.textContent = texto;
    console.log(texto);   
    let boton = document.querySelector(".btn");
    //console.log(boton);//identificar el botón 
    boton.addEventListener("click", function() {  //cuando den click al botón va realizar la tarea.
    //resultado.textContent = texto;
     aux=palindromo(texto);
     if(aux==true){
        resultado.textContent=" Es un Palindroma : " + texto;
     }else{

        resultado.textContent= "No es Palindroma : "+ texto;
     }  
  }); 
  function palindromo(texto){
    console.log(texto);
    return texto.split('').reverse().join('')==texto;
  }

  
    
  });

 