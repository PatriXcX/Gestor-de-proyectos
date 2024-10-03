-- MySQL Workbench Synchronization
-- Generated: 2024-10-03 21:49
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Ale

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER SCHEMA `freedb_proyectos molones`  DEFAULT CHARACTER SET utf8  DEFAULT COLLATE utf8_general_ci ;

CREATE TABLE IF NOT EXISTS `freedb_proyectos molones`.`proyectos` (
  `idproyectos` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_proyecto` VARCHAR(45) NOT NULL,
  `slogan` VARCHAR(45) NOT NULL,
  `repositorio` VARCHAR(45) NOT NULL,
  `demo` VARCHAR(45) NOT NULL,
  `tecnologias` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(260) NOT NULL,
  `foto_proyecto` VARCHAR(45) NOT NULL,
  `autora_idautora` INT(11) NOT NULL,
  PRIMARY KEY (`idproyectos`, `autora_idautora`),
  INDEX `fk_proyectos_autora_idx` (`autora_idautora` ASC) VISIBLE,
  CONSTRAINT `fk_proyectos_autora`
    FOREIGN KEY (`autora_idautora`)
    REFERENCES `freedb_proyectos molones`.`autora` (`idautora`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `freedb_proyectos molones`.`autora` (
  `idautora` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre_autora` VARCHAR(45) NOT NULL,
  `trabajo` VARCHAR(45) NOT NULL,
  `foto_autora` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idautora`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
