const boton=document.querySelector(".btn");
const btnD=document.querySelector(".btn2");
const tabla11=document.querySelector(".div2");
console.log(tabla11);


// boton add
boton.addEventListener("click",function handleSubmit(evento){ 
    console.log("esta funcioanado");    
     
} );

// boton delete
btnD.addEventListener("click",handleDelete);




//funtions
function handleDelete(evento){  
     let aux1=[];
     

     const auxcheck1=document.getElementById('checkbox1').checked;
     const auxcheck2=document.getElementById('checkbox2').checked;
     const auxcheck3=document.getElementById('checkbox3').checked;
    //console.log(auxcheck1)
    //console.log(auxcheck2)
    //console.log(auxcheck3)

        if (auxcheck1)
                {
                    aux1[0]="Crear Repositorio";
                    rayado1();                       
                    
                } 
        if(auxcheck2){
                    aux1[1]="Repositorio";      
                    rayado2();
                  
        }
        if(auxcheck3){
                    aux1[2]="Construir la interfaz de usuario"; 
                    rayado3(); 
               
        }  
        


        tareasC(aux1);    

         

}    


function rayado1() {
    const rayado= document.querySelector("#onee");
    rayado.className="is-completed";
    
}


function rayado2() {
    const rayado= document.querySelector("#doss");
    rayado.className="is-completed";
    
}

function rayado3() {
    const rayado= document.querySelector("#tress");
    rayado.className="is-completed";
    
}


//agregar elemento
function tareasC(aux1){
    const tcompletada=document.createElement("p");
      
    tcompletada.textContent=("La Tarea completada fue: '\n \n"+ aux1+"\n");   
    tcompletada.classList.add("tarea_completada");
    tabla11.appendChild(tcompletada);
    
   
    
    setTimeout(() => {
        tcompletada.remove();
    }, 10000);

    
    

}


/*function handleChecktask(evento){ 
   
} 
 */




/*
function contarSeleccionados()

{


}*/
    

    

