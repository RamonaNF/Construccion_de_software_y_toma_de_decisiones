const db = require('../util/database');

module.exports = class Imagen {
    constructor(nuevaImagen) {
        this.img = nuevaImagen.img || 'Test.jpg';
   }

   save() {
       return db.execute(`INSERT INTO gallery (img) VALUES (?)`, [this.img]);
   }

   static fetchAll(){
        return db.execute('SELECT img FROM gallery');
    }
}