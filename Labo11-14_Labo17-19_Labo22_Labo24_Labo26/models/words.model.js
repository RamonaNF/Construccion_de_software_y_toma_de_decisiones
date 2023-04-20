const db = require('../util/database');

//const dict = ['abrevadero', 'biorritmo', 'numerónimo']

module.exports = class Word {
    constructor(newWrd){
        this.wrd = newWrd.wrd;
    }

    static find(valorBuscado) {
        return dict.filter(word => word.includes(valorBuscado));
    }

    static fetchAll(filtro = '') {
        return db.execute(`SELECT name FROM words WHERE name LIKE ?`, ['%' + filtro + '%']);
    }

    save() {
        return db.execute(`INSERT INTO words(name) VALUES ?`, [this.wrd]);
    }
}
