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
