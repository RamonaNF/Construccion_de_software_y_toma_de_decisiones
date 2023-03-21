-- SUBCONSULTAS
    -- Pensar en dividir el problema
    -- Solo cuando sea necesario

/* 
Mostrar descripción de materiales no entregados
    PI{descripcion} Materiales
    -
    PI{descripcion} (Materiales >< Entregas)
*/

-- Consulta 1 (tradicional)
SELECT descripcion 
FROM materiales
MINUS (SELECT descripcion -- En este caso MINUS no es soportado por mySQL
        FROM materiales m, entregan e
        WHERE m.clave = e.clave);

-- Consulta 2 (portable, fácil de entender)
SELECT descripcion 
FROM materiales
WHERE clave NOT IN (SELECT clave 
                    FROM entregan); -- Paréntesis para priorizar (1ero lo de adentro)
                                    -- Para IN/NOT IN mismo dominio y grado

-- Consulta 3
SELECT descripcion
FROM materiales m
WHERE NOT EXISTS (SELECT * 
                    FROM entregan e
                    WHERE m.clave = e.clave);
