USE mat_project;

CREATE TABLE `storys`(
    `story_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT NOT NULL,
    `pass_away_id` INT NOT NULL,
    `story` VARCHAR(255) NOT NULL
);
CREATE TABLE `passed_away`(
    `pass_away_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `manager_id` INT NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `about` VARCHAR(255) NULL,
    `img` VARCHAR(255) NOT NULL,
    `lonely` TINYINT(1) NULL,
    `soldier` TINYINT(1) NULL,
    `rabbi` TINYINT(1) NULL,
    `age` INT NULL
);
CREATE TABLE `managers`(
    `manager_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL
);
CREATE TABLE `obligations`(
    `obligation_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `maschet` VARCHAR(255) NOT NULL,
    `episode` VARCHAR(255) NOT NULL,
    `user_id` INT NOT NULL,
    `pass_away_id` INT NOT NULL,
    `start_date` DATE NOT NULL,
    `deadline` DATE NOT NULL
);
CREATE TABLE `users`(
    `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL
);

-- ALTER TABLE
--     `passed_away` ADD CONSTRAINT `passed_away_manager_id_foreign` FOREIGN KEY(`manager_id`) REFERENCES `managers`(`manager_id`);
-- ALTER TABLE
--     `obligations` ADD CONSTRAINT `obligations_pass_away_id_foreign` FOREIGN KEY(`pass_away_id`) REFERENCES `passes_away`(`pass_away_id`);
-- ALTER TABLE
--     `storys` ADD CONSTRAINT `storys_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE
--     `obligations` ADD CONSTRAINT `obligations_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE
--     `storys` ADD CONSTRAINT `storys_pass_away_id_foreign` FOREIGN KEY(`pass_away_id`) REFERENCES `passes_away`(`pass_away_id`);