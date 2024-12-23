CREATE DATABASE mat_project;

USE mat_project;


CREATE TABLE `passed_away`(
    `passed_away_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `manager_id` INT UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `year_death` INT NOT NULL,
    `month_death` INT NOT NULL,
    `day_death` INT NOT NULL,
    `about` VARCHAR(255) NULL,
    `img` VARCHAR(255)  NULL,
    `lonely` TINYINT(1) NULL DEFAULT 0,
    `soldier` TINYINT(1) NULL DEFAULT 0,
    `rabbi` TINYINT(1) NULL DEFAULT 0,
    `age` INT NULL
);

-- it's in a different table because we want to have a option to take payments from managers
CREATE TABLE `managers`(
    `manager_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED NOT NULL,
    `phone` VARCHAR(255) NULL,
    `state` VARCHAR(255) NOT NULL,
);

CREATE TABLE `users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL DEFAULT 'user'
);

CREATE TABLE `stores`(
    `story_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED NOT NULL,
    `passed_away_id` INT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `story` TEXT NOT NULL
);


CREATE TABLE `commitments`(
    `commitment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `maschet` VARCHAR(255) NOT NULL,
    `round_number` INT NOT NULL DEFAULT 1,
    `user_id` INT UNSIGNED NOT NULL,
    `passed_away_id` INT UNSIGNED NOT NULL,
    `start_date` DATE NOT NULL,
    `deadline` DATE NULL

);


-- here foreign keys
ALTER TABLE `passed_away`
ADD FOREIGN KEY (`manager_id`) REFERENCES `managers`(`manager_id`);

ALTER TABLE `stores`
ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`),
ADD FOREIGN KEY (`passed_away_id`) REFERENCES `passed_away`(`passed_away_id`);


ALTER TABLE `commitments`
ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`),
ADD FOREIGN KEY (`passed_away_id`) REFERENCES `passed_away`(`passed_away_id`);

ALTER TABLE `managers`
ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`);

