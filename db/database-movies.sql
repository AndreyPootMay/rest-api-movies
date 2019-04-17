CREATE DATABASE IF NOT EXISTS movies;

USE movies;

CREATE TABLE `movies` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`name` VARCHAR(150) NULL DEFAULT NULL,
	`year` INT(11) NULL DEFAULT NULL,
	`director` VARCHAR(200) NULL DEFAULT NULL,
	`genre` VARCHAR(200) NULL DEFAULT NULL,
	`principal_actor` VARCHAR(200) NULL DEFAULT NULL,
	PRIMARY KEY (`id`)
)
ENGINE=InnoDB
;

DESCRIBE movies;

## Datos de prueba
INSERT INTO movies (name, year,director, genre, principal_actor) values 
  ('Hellboy', 2004 , 'Del Toro', 'Action', 'Ron Perlman'),
  ('Titanic', 1997 , 'James Cameron', 'Drama', 'Leonardo DiCaprio'),
  ('Hooligans', 2008 , 'Green Street Hooligans', 'Action', 'Charlie Hunnam');

SELECT * FROM movies;
