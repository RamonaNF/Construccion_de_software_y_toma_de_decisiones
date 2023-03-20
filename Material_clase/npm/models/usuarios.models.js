const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario{ 
    constructor(nuevoUsuario){
        this.nombre = nuevoUsuario.nombre || 'John Doe';
        this.user = nuevoUsuario.user || 'johndoe';
        this.password = nuevoUsuario.password || 'johndoejohndoe';
    }

    save(){
        return bcrypt.hash(this.password, 12) // Ciframos 12 veces por el método bcrypt
            .then((passwordCifrado) => {
                return db.execute('INSERT INTO usuarios (nombre, user, password) VALUES (?, ?, ?)',
                                    [this.nombre, this.user, passwordCifrado]);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    static fetchOne(username){
        return db.execute('SELECT nombre, password FROM usuarios WHERE user = (?)', [username]);
    }

    static fetchPrivilegios(username){
        return db.execute(`SELECT p.nombre 
                            FROM usuarios u, usuario_rol ur, rol r, rol_privilegio rp, privilegios p
                            WHERE u.id = u.id
                                AND ur.id = r.id
                                AND r.id = rp.id,
                                AND rp.id = p.id
                                AND u.user = (?)`, 
                           [username]);
    }
}
