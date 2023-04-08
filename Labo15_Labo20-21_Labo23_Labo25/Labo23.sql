/*
    ¿Qué desventajas identificas en la utilización de store procedures?
        
        VENTAJAS:
        - Aumento del rendimiento de las aplicaciones
        - Mejora de la agilidad
        - Código portátil
        - Transparencia y posibilidad de reutilización
        - Mayor seguridad
        
        DESVENTAJAS:
        - Aumentan el uso de la memoria
        - Restringidos para una lógica de negocios compleja
        - Difíciles de depurar
        - Difíciles de mantener

        https://blog.mdcloud.es/procedimientos-mysql-ventajas-desventajas/
*/

-- Stored procedures para la sección de dietas del proyecto Onyx
USE Onyx;

DELIMITER //
    CREATE PROCEDURE agregarIngrediente(IN ingId VARCHAR(96), IN ingName VARCHAR(40), IN ingQuantity FLOAT, IN ingUnit VARCHAR(10), IN ingDietId VARCHAR(96))
    BEGIN
       	INSERT INTO ingredient(id, name, quantity, unit, dietId) VALUES(ingId, ingName, ingQuantity, ingUnit, ingDietId);
	END;
//

DELIMITER //
    CREATE PROCEDURE agregarDieta(IN dietId VARCHAR(96), IN dietName VARCHAR(40), IN dietCalories INT(11), IN dietMacros JSON, IN dietMicros JSON)
    BEGIN
       	INSERT INTO diet(id, name, calories, macros, micros) VALUES(dietId, dietName, dietCalories, dietMacros, dietMicros);
	END;
//

DELIMITER //
	CREATE PROCEDURE eliminarDieta(IN dId VARCHAR(96))
    BEGIN
    	DELETE FROM clientdiet
        WHERE dietId = dId;
        
        DELETE FROM ingredient
        WHERE dietId = dId;
        
        DELETE FROM diet
        WHERE id = dId;
    END;
//

CALL agregarIngrediente ('uuidIN016', 'Elote', 1, 'pza', 'uuidD001');

CALL agregarDieta('uuidD011', '2000', 2000, '{"proteina": ["2g", "7g"], "grasas": ["5g", "4g"], "carbohidratos": ["4g", "3g"]}', '{"Calcio": ["2μg", "2μg"], "Vitamina A": ["7μg", "2μg"]}');

CALL eliminarDieta('uuidD010');