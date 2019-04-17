USE movies;

DELIMITER $$
USE `movies`$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `movieAddOrEdit`(
  IN `_id` INT,
  IN `_name` VARCHAR(150),
  IN `_year` INT
)
LANGUAGE SQL
NOT DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
COMMENT ''
BEGIN
  IF _id = 0 THEN
    INSERT INTO movies (name, year)
    VALUES (_name, _year);
    SET _id = LAST_INSERT_ID();
    ELSE
    UPDATE movies
    SET
    name = _name,
    year = _year
    WHERE id = _id;
    END IF;

  SELECT _id AS 'id';
END