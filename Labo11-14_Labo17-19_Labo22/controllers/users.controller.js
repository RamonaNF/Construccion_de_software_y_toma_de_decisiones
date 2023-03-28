const usuario = require('../models/users.models');
const image = require('../models/gallery.models');
const bcrypt = require('bcryptjs');

exports.getHome = (request, response, next) => {
    image.fetchAll()
        .then(([rows, fieldData]) => {
            //console.log(rows[0].img);
            response.render('index', {
                isLoggedIn: request.session.isLoggedIn || false,
                privilegios: request.session.privilegios || [],
                images: rows
            });
        })
        .catch((error) => {
            //console.log(error);
            response.render('index', {
                isLoggedIn: request.session.isLoggedIn || false,
                privilegios: request.session.privilegios || [],
                images: []
            });
        });
};

exports.getLogin = (request, response, next) => {
    const mensaje = request.session.mensaje || '';
 
     if (request.session.mensaje) {
         request.session.mensaje  = '';
     }
 
     response.render('login', {
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false
     });
};

exports.postLogin = (request, response, next) => {
    usuario.fetchOne(request.body.user)
        .then(([rows, fieldData]) => {
            if (rows.length == 1) {
                //console.log(rows);

                bcrypt.compare(request.body.password, rows[0].password)
                    .then((doMatch) => {
                        if(doMatch) {
                            request.session.isLoggedIn = true;
                            
                            usuario.fetchPrivilegios(rows[0].user)
                                .then(([consultaPrivilegios, fieldData]) => {
                                    //console.log(consultaPrivilegios);

                                    const privilegios = [];
                                    for(let privilegio of consultaPrivilegios) {
                                        privilegios.push(privilegio.name);
                                    }

                                    request.session.privilegios = privilegios;
                                    console.log(request.session.privilegios);

                                    /*return request.session.save(err => {
                                        response.redirect('/home');
                                    });*/
                                    response.redirect('/home');
                                })
                                .catch((error) => {
                                    console.log(error)
                                })
                        } else {
                            request.session.mensaje = "Usuario y/o contraseña incorrectos";
                            response.redirect('/login');
                        }
                    })
                    .catch((error) => console.log(error));
                
            } else {
                request.session.mensaje = "Usuario y/o contraseña incorrectos";
                response.redirect('/login');
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.getSignup = (request, response, next) => {
    response.render('signup', {
        isLoggedIn: request.session.isLoggedIn || false
    });
};

exports.postSignup = (request, response, next) => {
    const newUser = new usuario({
        name: request.body.name,
        user: request.body.user,
        password: request.body.password,
    });

    newUser.save()
        .then(([rows, fieldData]) => {
            response.redirect('/login');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.postImg = (request, response, next) => {
    //console.log(request.file.filename); //request.file.path

    const newImg = new image({
        idUsuario: request.body.name,
        img: request.file.filename,
    });

    newImg.save()
        .then(([rows, fieldData]) => {
            response.redirect('/home');
        })
        .catch((error) => {
            console.log(error);
        });
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login');
    });
};