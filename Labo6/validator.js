const submitBtn = document.getElementById("submitBtn");
const alertMsg = document.getElementById("alertMsg");
const alerts = [false, false]; // Danger, warning

submitBtn.disabled = true;
submitBtn.classList = ["btn btn-danger"];

function changeAlertStatus(id) {
    alerts[id] = !alerts[id];
}

function validate() {
    const passwrd = document.getElementById("passwrd");
    const passwrdConf = document.getElementById("passwrdConf");

    if(passwrd.value === passwrdConf.value){
        alerts[0] = false;
                                              // De 6 a 10 caracteres
        if(/^.{6,10}$/.test(passwrd.value)){ //if(passwrd.value != ''){ //REGEX -> .*{6,10}
            alertMsg.innerHTML = "";
            submitBtn.disabled = false;
            submitBtn.classList = ["btn btn-success"];
        }else{
            submitBtn.disabled = true;
            submitBtn.classList = ["btn btn-warning"];

            if(!alerts[1]){
                alertMsg.innerHTML = "";
                alertMsg.innerHTML += '<div class="alert alert-dismissible alert-warning fade in"> <a class="close" data-dismiss="alert" onclick="changeAlertStatus(1)"> &times; </a> <strong> WARNING </strong> <br> - Debe contener entre 6 y 10 caracteres </div>';
                alerts[1] = true;
            }
        }
    }else{
        alerts[1] = false;
        submitBtn.disabled = true;
        submitBtn.classList = ["btn btn-danger"];

        if(!alerts[0]){
            alertMsg.innerHTML = "";
            alertMsg.innerHTML += '<div class="alert alert-dismissible alert-danger fade in"> <a class="close" data-dismiss="alert" onclick="changeAlertStatus(0)"> &times; </a> <strong> ERROR </strong> <br> No coinciden los passwords </div>';
            alerts[0] = true;
        }
    }
}
