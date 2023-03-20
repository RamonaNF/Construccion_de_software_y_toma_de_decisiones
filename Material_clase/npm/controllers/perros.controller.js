const bodyParser = require('body-parser');
const perro = require('../models/perros.models');

exports.listar = (request, response, next) => {
    console.log(request.get('Cookie'));

    //Crear variable para que si no hay cookie se cuente con un string para hacer el split
    let cookies = request.get('Cookie') || '';
    let consultas = cookies.split(';')[0].split('=')[1] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    perro.promesa()
    //perro.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            
            response.render('lista', { 
                razas: perro.fetchAll(), // rows
                lastDog: request.session.lastDog || '',
                isLoggedIn: request.session.isLoggedIn || false,
                nombre: request.session.nombre || '', 
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getNuevo = (request, response, next) => {
    perro.fetchRazas()
        .then(([rows, fileData]) => {
            response.render('nuevo', {
                razas:rows,
                isLoggedIn: request.session.isLoggedIn || false,
                nombre: request.session.nombre || '',
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.postNuevo = (request, response, next) => {
    const perrito = new perro({
        raza: request.body.raza,
    });

    perrito.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'lastDog=' + perrito.raza + '; HttpOnly');
            //response.session.lastDog = perrito.raza;
            
            response.redirect('/perros/');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getEditar = (request, response, next) => {
    // RECOMENDACIONES: EDITAR
    // const id = request.params.id || -1;
    // mandar objeto con el id -> si no manda nada que mande a registrar
    
    perro.fetchRazas()
        .then(([rows, fileData]) => {
            response.render('editar', {
                razas:rows,
                isLoggedIn: request.session.isLoggedIn || false,
                nombre: request.session.nombre || '',
            });
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.postEditar = (request, response, next) => {
    console.log(response.body); //.razas, response.body.raza);
    response.redirect('/perros/');
    
    /*const perritoAux = new perro({
        raza: request.body.raza,
    });

    perritoAux.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'lastDog=' + perritoAux.raza + '; HttpOnly');
            //response.session.lastDog = perrito.raza;
            
            response.redirect('/perros/');
        })
        .catch((error) => {
            console.log(error);
        });*/
};
