-- Ejercicio: SQL con Funciones Agregadas

-- Estructura básica SQL
/*
    SELECT columnas, [columnas con funciones agregadas {count, min, max, avg...} ]
    FROM tablas {vistas} [join natural]
    WHERE [join natural] + {Condiciones simples, sobre valores de campos}
    GROUP BY columnas que NO usan la función agregadas
    HAVING [condiciones con funciones agregadas]
    ORDER BY ... 
*/




/* ¿Qué regresa la siguiente consulta?
    La cantidad de materiales vendidos por fecha registrada
*/

-- Consulta ejemplo
SELECT descripcion, fecha, SUM(cantidad) AS 'Total unidades'
FROM materiales M, entregas E
WHERE M.clave = E.clave
GROUP BY descripcion, fecha
ORDER BY SUM(cantidad) DESC; -- OJO: ORDER BY no puede ser usado en vistas

/* ¿Cómo agrupar únicamente por material? */

-- Consulta mejorada
SELECT descripcion, SUM(cantidad) AS 'Total unidades'
FROM materiales M, entregas E
WHERE M.clave = E.clave
GROUP BY descripcion
ORDER BY SUM(cantidad) DESC;

/* ¿Cómo desplegar el material más entregado? */

-- Consulta
SELECT descripcion, SUM(cantidad) AS 'Total unidades'
FROM materiales M, entregas E
WHERE M.clave = E.clave
GROUP BY descripcion
ORDER BY SUM(cantidad) DESC
LIMIT 0, 1; -- OJO: Con el gestor usado (LIMIT | TOP | etc)




/* ESQUEMA RELACIONAL
      Película (título, año, duración, encolor, presupuesto, nomestudio, idproductor)
      Elenco (título, año, nombre, sueldo)
      Actor (nombre, dirección, telefono, fechanacimiento, sexo)
      Productor (idproductor, nombre, dirección, teléfono)
      Estudio (nomestudio, dirección) */


/* Ingreso total recibido por cada actor
    Sin importar en cuantas películas haya participado. */

-- Consulta 1
SELECT nombre, SUM(sueldo) AS 'Ingreso total'
FROM elenco
GROUP BY nombre -- RECOMENDACIÓN: TODAS las columnas sin función agregada
ORDER BY SUM(sueldo) DESC; -- RECOMENDACIÓN: los datos SIEMPRE se ordenan
                                        -- No usar el alias (para código portable)




/* Monto total destinado a películas por cada Estudio Cinematográfico
    Durante la década de los 80's. */

-- Consulta 2
SELECT nomestudio, SUM(presupuesto) AS 'Inversión a películas'
FROM pelicula
WHERE anio >= 1980 AND anio < 1990
GROUP BY nomestudio
ORDER BY SUM(presupuesto) DESC;




/* Nombre y sueldo promedio de los actores
    Sólo hombres
    Que reciben en promedio un pago superior a 5 millones de dolares por película. */

-- Consulta 3
SELECT a.nombre, AVG(e.sueldo) AS 'Sueldo Promedio'
FROM Actor a, Elenco e
WHERE a.nombre = e.nombre AND a.sexo = 'M'
GROUP BY a.nombre
HAVING AVG(e.sueldo) > 5000000
ORDER BY AVG(e.sueldo) DESC;




/* Título y año de producción de las películas con menor presupuesto.
    (E.g. la película de Titanic se ha producido en varias veces entre la lista de películas estaría la producción de Titanic y el año que fue filmada con menor presupuesto). */

-- Consulta 4
SELECT titulo, año, MIN(presupuesto) AS 'Presupuesto'
FROM Pelicula
GROUP BY titulo
HAVING presupuesto = MIN(presupuesto)
ORDER BY presupuesto DESC;




/*
Mostrar el sueldo de la actriz mejor pagada.
*/

-- Consulta 5
SELECT MAX(sueldo) AS 'Salario'
FROM actor a, elenco e
WHERE a.nombre = e.nombre
    AND a.sexo = 'F';
