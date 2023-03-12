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
    
    /*let html = `<h1>` + request.body.name + `</h1>
                <small>` + request.body.age + ` anios </small>
                <a href="https://buenamente.co/post/descubre-lo-que-la-estacion-del-ano-en-que-naciste-dice-sobre-ti-y-tu-alma/17087" target="_blank">` + request.body.estacionFav + `</a> <br>
                <img width="100%" alt="Estación favorita" src="
               `;
    if(request.body.estacionFav === 'invierno'){
        html += 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/OE4BORQYVBOURGTV3VOXMWXQ2M.jpg">';
    } else if(request.body.estacionFav === 'primavera'){
        html += 'https://imagenes.elpais.com/resizer/WLxaoiXZVJmVPC1yO32wraOHEjo=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/MLWVH6U2CA5DMN4TZWKUVZYSCM.jpg">';
    } else if(request.body.estacionFav === 'verano'){
        html += 'https://concepto.de/wp-content/uploads/2018/08/verano2-e1535637899885.jpg">';
    } else {
        html += 'https://okdiario.com/img/2021/08/31/otono-655x368.jpg">';
    }*/

    if (!filesystem.existsSync('visit.txt')) {
        filesystem.writeFileSync('visit.txt', request.body.name + ', ' + request.body.age + ' anios, ' + request.body.estacionFav);
    } else {
        filesystem.appendFile('visit.txt', '\n'+ request.body.name + ', ' + request.body.age + ' anios, ' + request.body.estacionFav, function (error) {
            if (error) {
                throw error;
            }        
        });
    }

    //response.send(html);
    //response.render('visit', {people: persona.fetchAll()});
    persona.fetchAll()
        .then(([rows, fieldData]) => {
            //console.log('Rows: ', rows);
            
            response.render('visit', { 
                people: rows, 
            });
        })
        .catch(err => {
            console.log(err);
        });
};