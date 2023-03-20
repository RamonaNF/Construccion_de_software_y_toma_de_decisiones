const db = require('../util/database');

//const razas = ["Beagle", "Golden", "Husky", "Dálmata", "Chihuahua", "Chilaquil", "Pug"];
const razas = [{raza: "Beagle"}, {raza: "Golden"}, {raza: "Husky"}, {raza: "Dálmata"}, {raza: "Chihuahua"}, {raza: "Chilaquil"}, {raza: "Pug"}];

module.exports = class Perro {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevaRaza) {              //nuevoPerro
        this.raza = nuevaRaza.raza || 'NULL';  // nuevoPerro.nombre | raza | img | handle || ''
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        //razas.push(this);
        return db.execute('INSERT INTO razas (nombre) VALUES (?)', [this.raza]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return razas;
    }

    static promesa() {
        //return db.execute('SELECT * FROM perros');
        return db.execute('SELECT R.nombre AS "raza" FROM perros P, razas R WHERE R.id = P.idRaza');
    }

    static fetchRazas() {
        return db.execute('SELECT * FROM razas');
    }

    static fetchId(id) {
        return db.execute('SELECT * FROM razas WHERE id = ?', [id]);
    }

    static fetch(id) {
        if(id) {
            return Perro.fetchId(id);
        }else{
            return Perro.fetchAll();
        }
    }
}