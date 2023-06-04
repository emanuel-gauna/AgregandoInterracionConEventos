window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

/* microdesafio Paso 2 */
    const  estadoSecreto = 0;
    const $tituloSecreto =  document.querySelector("input.secreto");

    $tituloSecreto.addEventListener("keypress", (event) => {
        let key = event.key; /* la tecla  que dispara el evento */
        console.log(key) ;

        switch (estadoSecreto) {
            case 0:
               (estadoSecreto == 0 && key == "s") ? estadoSecreto = 1: "";
                /* si estado secreto es 0 && presionamos S ... estado secreto pasa a 1 sino "" */
                console.log(estadoSecreto)
                break;
            case 1:
                (estadoSecreto == 1 && key == "e") ? estadoSecreto = 2: "";
                /* si estamos en el estado 1 y presionamos la tecla e pasa a estado 2 */
                console.log(estadoSecreto)
                break;
            case 2:
                (estadoSecreto == 2 && key == "c") ? estadoSecreto = 3 : "";
                break;
        
            case 3:
                (estadoSecreto == 3 && key == "r") ? estadoSecreto = 4 : "";
                   
                break;
        
            case 4:
                (estadoSecreto == 4 && key == "e") ? estadoSecreto = 5 : "";
                    
                break;
            case 5:
                (estadoSecreto == 5 && key == "t") ? estadoSecreto = 6 : "";
                break;
            case 6:
                (estadoSecreto == 6 && key == "o") ? alert("Secreto Magico") : "";
                estadoSecreto = 0
                break;
        
            default:
                console.log("lo que sea");
                break;
        }
    })
}