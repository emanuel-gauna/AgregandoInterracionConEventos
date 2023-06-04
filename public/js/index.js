window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');

    
    
    let nombre = prompt('Ingrese su nombre');
    console.log(nombre);
    if(nombre != ''){
        subtitulo.innerHTML += " " + nombre;
    }else{
        subtitulo.innerHTML += " " + 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    console.log(destacado);
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }

    container.style.display = 'block';

///// mostrar menu id="menu"
const logo = document.querySelector("figure.logoDH");
const contenedor = document.querySelector("main.container");/* contenedor en display "none" */
const hamburguerMenu = document.querySelector("#menu");
    
    
  
        contenedor.style.display = "block"; 

        logo.addEventListener("click", function(e) {

            hamburguerMenu.classList.toggle("mostrar");
     } )
    

        hamburguerMenu.addEventListener("mouseout", function(){ 
            hamburguerMenu.classList.toggle("mostrar");
        })  

        let modoOscuro = document.querySelector("#modoOscuro")

        modoOscuro.addEventListener("mouseover", function(e){
            fondo.classList.toggle('fondo');
              document.body.classList.add("modoOscuro"); 
        })

        for (const a of hamburguerMenu) {
            a.addEventListener("mouseover", function(e) {
                e.preventDefault;
               if(a.classList = "colors"){
                a.style.color = "red";
               } else{
                a.classList = "colors";
               }   
                
             })  
        }
    
    
        /* microdesafio 2 */
    

    
 } 
