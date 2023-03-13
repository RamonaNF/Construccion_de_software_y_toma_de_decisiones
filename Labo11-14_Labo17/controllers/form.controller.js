//const path = require('path');
const filesystem = require('fs');
const persona = require('../models/form.models');

exports.getForm = (request, response, next) => {
    //response.render(path.join(__dirname, '..', 'views', 'form.ejs'));
    response.render('form');
};

exports.postForm = (request, response, next) => {
    //console.log(request.body); // Created automatically by body parser (JSON)

    const visita = new persona({
        name: request.body.name,
        age: request.body.age,
        estacionFav: request.body.estacionFav,
    });
    visita.save();

    response.setHeader('Set-Cookie', 'lastVisit=' + visita.name + '; HttpOnly');

    if(request.session.consultas != 0){
        request.session.consultas++;
    } else {
        request.session.consultas = 0;
    }
    
    if (!filesystem.existsSync('visit.txt')) {
        filesystem.writeFileSync('visit.txt', request.body.name + ', ' + request.body.age + ' anios, ' + request.body.estacionFav);
    } else {
        filesystem.appendFile('visit.txt', '\n'+ request.body.name + ', ' + request.body.age + ' anios, ' + request.body.estacionFav, function (error) {
            if (error) {
                throw error;
            }        
        });
    }

    //response.render('visit', {people: persona.fetchAll()});
    persona.fetchAll()
        .then(([rows, fieldData]) => {
            //console.log('Rows: ', rows);

            if(typeof request.get('Cookie') === 'string'){
                response.render('visit', { 
                    people: rows,
                    visits: request.session.consultas || '',
                    visitant: request.get('Cookie').split(';')[0].split('=')[1]
                });
            }else{
                response.render('visit', { 
                    people: rows,
                    visits: request.session.consultas || '',
                    visitant: ''
                });
            }
        })
        .catch(err => {
            console.log(err);
        });
};