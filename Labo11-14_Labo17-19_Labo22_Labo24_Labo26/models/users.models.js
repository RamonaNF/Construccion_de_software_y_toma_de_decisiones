const db = require('../util/database');
const bcrypt = require('bcryptjs');
 
 module.exports = class Usuario {
 
    constructor(nuevoUsuario) {
         this.name = nuevoUsuario.name || 'NULL';
         this.user = nuevoUsuario.user || 'NULL';
         this.password = nuevoUsuario.password || 'NULLNULLNULL';
    }
 
    save() {
        return bcrypt.hash(this.password, 12)
            .then((passwordCifrado) => {
                return db.execute(`INSERT INTO usuario (name, user, password) values (?, ?, ?)`, [this.name, this.user, passwordCifrado]);
            })
            .catch((error) => {
                console.log(error);
            });
    }
 
    static fetchOne(user){
        return db.execute('SELECT * FROM usuario WHERE user = ?', [user]);
    }
 
    static fetchPrivilegios(user) {
        return db.execute(`SELECT p.name
                            FROM usuario u, usuarioRol ur, rol r, rolPrivilegio rp, privilegio p 
                            WHERE u.id = ur.idUsuario 
                                AND ur.idRol = r.id 
                                AND r.id = rp.idRol
                                AND rp.idPrivilegio = p.id 
                                AND u.user = ? `, [user]);
    }
}