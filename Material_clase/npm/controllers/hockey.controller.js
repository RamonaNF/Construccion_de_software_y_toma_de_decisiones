exports.getNuevo = (request, response, next) => {
    let html = `
                <form action="/hockey/nuevo" method="POST">
                    <label for="jugador"> Nombre del jugador </label>
                    <input type="text" id="jugador" name="jugador">
                    <input type="submit" value="enviar">
                </form>
                `;
    response.send(html);
}

exports.postNuevo = (request, response, next) => {
    console.log(request.body); // Created automatically by body parser
    response.send("El jugador es "+ request.body.jugador); // JSON
}