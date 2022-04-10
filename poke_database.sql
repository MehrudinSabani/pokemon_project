-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `poketeams`;

CREATE SCHEMA `poketeams`;
USE `poketeams` ;

-- -----------------------------------------------------
-- Table `poketeams`.`pokemon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `poketeams`.`pokemon` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `image` VARCHAR(255) DEFAULT NULL,
  `moves` VARCHAR(255) DEFAULT NULL,
  `name` VARCHAR(255) DEFAULT NULL,
  `pokedex_nr` VARCHAR(255) DEFAULT NULL,
  
  `poke_type` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)

) 
ENGINE=InnoDB
AUTO_INCREMENT = 1;


INSERT INTO pokemon(image, moves, name, pokedex_nr, poke_type) VALUES ("assets/images/squirtle.png", "hydro pump", 'Squirtle', '2', 'waterpokemon');
INSERT INTO pokemon(image, moves, name, pokedex_nr, poke_type) VALUES ("assets/images/squirtle.png", "dragon breath", 'Dialga', '255', 'dragon' 'steelpoke_type');
