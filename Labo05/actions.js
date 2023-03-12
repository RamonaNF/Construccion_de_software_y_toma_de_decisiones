function alerts(tag){
    let div;
    if(tag){
        div = document.getElementById("alertTxt");
    } else {
        div = document.getElementById("acts");
    }
    
    if(!tag || tag == 1){
        div.innerHTML += '<div class="alert alert-success alert-dismissible fade in"> <a class="close" data-dismiss="alert"> &times; </a> <strong> Completado </strong> <br> Rodrigo Terán, <a href="https://github.com/RodrigoTeran/natgas" class="alert-link" target="_blank"> repositorio grupal </a> </div>';
    }
    if(!tag || tag == 2){
        div.innerHTML += '<div class="alert alert-dismissible fade in"> <a class="close" data-dismiss="alert"> &times; </a> <strong> En progreso </strong> <br> Daniel Hurtado, actividades del sprint </div>';
    }
    if(!tag || tag == 3){
        div.innerHTML += '<div class="alert alert-info alert-dismissible fade in"> <a class="close" data-dismiss="alert"> &times; </a> <strong> En revisión </strong>  <br> Armando Rosas, catálogos de información </div>';
    }
    if(!tag || tag == 4){
        div.innerHTML += '<div class="alert alert-warning alert-dismissible fade in"> <a class="close" data-dismiss="alert"> &times; </a> <strong> Implementando cambios </strong>  <br> Sebastián Flores, interfaz de inicio </div>';
    }
    if(!tag || tag == 5){
        div.innerHTML += '<div class="alert alert-danger alert-dismissible fade in"> <a class="close" data-dismiss="alert"> &times; </a> <strong> Retraso </strong>  <br> Ramona Nájera, casos de uso </div>';
    }
}
