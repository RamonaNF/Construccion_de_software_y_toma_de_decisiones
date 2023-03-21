/*
    CONSULTA 1
        Mostrar descripcion de los materiales 
        entregados al proyecto 'Queretaro limpio'
        ordenados alfabéticamente
*/

-- Consulta 1
SELECT descripcion
FROM Materiales M, Entregan E, Proyectos P
WHERE M.clave = E.clave
	AND P.numero = E.numero
	AND P.denominacion = 'Queretaro limpio'
ORDER BY descripcion ASC;

/*
    CONSULTA 2
        Monstrar razonsocial de los proveedores
        y el total de unidades entregadas (sin importar el material)
        ordenados de mayor a menor en función de la unidades entregadas
        SOLO para aquellos proveedores que registraron más de 1000 unidades
*/

-- Consulta 2
SELECT razonsocial, SUM(cantidad) AS 'totalUnidadesEntregadas'
FROM Proveedores P, Entregan E
WHERE P.rfc = E.rfc 
GROUP BY razonsocial
HAVING SUM(cantidad)>1000
ORDER BY SUM(cantidad) DESC;

/*
    CONSULTA 3
        Mostrar descripcion de los materiales
        y el total de veces que han sido entregados (sin importar proveedor/proyecto)
        durante la década pasada
        ordenados de mayor a menor
*/

-- Consulta 3
SELECT descripcion, COUNT(*) AS 'numeroDeEntregas' -- COUNT(E.clave)
FROM Materiales M, Entregan E
WHERE M.clave = E.clave
	AND E.fecha BETWEEN '2010-01-01'AND '2019-12-31'
GROUP BY descripcion
ORDER BY COUNT(*) DESC;  -- COUNT(E.clave)

/*
    CONSULTA 4
        Mostrar razon social de proveedores
        que registraron más entregas que el proveedor con razonsocial 'Oviedo'
*/

-- Consulta 4
SELECT razonsocial, COUNT(*) AS 'Entregas'
FROM Proveedores P, Entregan E
WHERE P.rfc = E.rfc
GROUP BY razonsocial
HAVING COUNT(*) > (SELECT COUNT(*)
                   FROM Proveedores P, Entregan E
                   WHERE P.rfc = E.rfc
                    AND razonsocial = 'Oviedo');




-- Estructura básica SQL
/* SELECT
FROM
WHERE
GROUP BY
HAVING
ORDER BY */
