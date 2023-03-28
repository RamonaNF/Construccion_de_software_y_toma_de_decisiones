const db = require('../util/database');
const personas = [
                    {name: 'Ramona',
                     age: '19',
                     estacionFav:'otonio'}
                ];

module.exports = class Persona {
    constructor(nuevaPersona) {
        this.name = nuevaPersona.name || 'NULL';
        this.age = nuevaPersona.age || 'NULL';
        this.estacionFav = nuevaPersona.estacionFav || 'NULL';
    }

    save() {
        //personas.push(this);
        return db.execute('INSERT INTO form (name, age, estacionFav) VALUES (?, ?, ?)',
                    [this.name, this.age, this.estacionFav]);
    }

    static fetchAll() {
        //return personas;
        return db.execute('SELECT * FROM form');
    }
}