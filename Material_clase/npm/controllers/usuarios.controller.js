const user = require('../models/usuarios.models');
const bcrypt = require('bcryptjs');

exports.getSignUp = (request, response, next) => {
    response.render('signup', {
                isLoggedIn: request.session.isLoggedIn || false,
                nombre: request.session.nombre || '',
            });
};

exports.postSignUp = (request, response, next) => {
    const usuario = new user ({
        nombre: request.body.nombre,
        user: request.body.user,
        password: request.body.password
    });

    usuario.save()
        .then(([rows, fielData]) => {
            response.redirect('/usuarios/login');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getLogin = (request, response, next) => {
    const mensaje = request.session.mensaje || '';

    if(request.session.mensaje){
        request.session.mensaje = '';
    }

    response.render('login', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });    
    //response.render('login');
}

exports.postLogin = (request, response, next) => {
    user.fetchOne(request.body.user)
        .then(([rows, fielData]) => {
            if (rows.length == 1){
                //response.redirect('/perros');
                console.log(rows, request.body.password, rows[0].password);
                bcrypt.compare(request.body.password, rows[0].password)
                    .then((doMatch) => {
                        if(doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.nombre = rows[0].nombre;
                            return request.session.save(err => {
                                response.redirect('/perros');
                            });
                        }else{
                            request.session.mensaje = 'Usuario y/o contrasenia incorrectos';
                            response.redirect('/usuarios/login');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }else{
                request.session.mensaje = 'Usuario y/o contrasenia incorrectos';
                response.redirect('/usuarios/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });

    //response.redirect('/perros');
}

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/usuarios/login'); // Cuando la sesión se elimina
    });
};