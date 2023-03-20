-- DROP DATABASE labos;

CREATE DATABASE labos;
USE labos;

CREATE TABLE form(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    estacionFav VARCHAR(20) NOT NULL,
    visit TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

INSERT INTO form (name, age, estacionFav) VALUES
('Romi', 17, 'otonio'),
('Ramona', 29, 'invierno'),
('Pedro', 30, 'verano'),
('Concha', 90, 'primavera');

-- ------------------------------------------------------------

-- USE labos;

CREATE TABLE usuario(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    user VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE rol(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE usuarioRol(
    idUsuario INT NOT NULL,
    idRol INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(idUsuario, idRol)
);

CREATE TABLE privilegio(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    descripcion TEXT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE rolPrivilegio(
    idRol INT NOT NULL,
    idPrivilegio INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    PRIMARY KEY(idRol, idPrivilegio)
);

ALTER TABLE usuarioRol
ADD FOREIGN KEY (idUsuario) REFERENCES usuario(id),
ADD FOREIGN KEY (idRol) REFERENCES rol(id);

ALTER TABLE rolPrivilegio
ADD FOREIGN KEY (idRol) REFERENCES rol(id),
ADD FOREIGN KEY (idPrivilegio) REFERENCES privilegio(id);

INSERT INTO rol(name, descripcion) VALUES 
('Visitante', 'Usuario no loggeado'),
('Cliente', 'Usuario registrado y loggeado'),
('Admin', 'Privilegios de cliente + manejo del sistema');

INSERT INTO privilegio(name, descripcion) VALUES 
('Form', 'Preséntate y conoce un dato curioso sobre algunos de nuestros clientes'),
('Info', 'Q&A'),
('Pruebas', 'Testing area');

INSERT INTO rolPrivilegio(idRol, idPrivilegio) VALUES 
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(3, 3);

-- ------------------------------------------------------------

-- USE labos;

INSERT INTO usuarioRol(idUsuario, idRol) VALUES
(1, 3),
(2, 2);
