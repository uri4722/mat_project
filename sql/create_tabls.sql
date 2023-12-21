USE mat_project;

CREATE TABLE `storys`(
    `story_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_email` VARCHAR(255) NOT NULL,
    `passed_away_id` INT NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `story` VARCHAR(255) NOT NULL
);
CREATE TABLE `passed_away`(
    `passed_away_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `manager_id` INT NOT NULL,
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
CREATE TABLE `managers`(
    `manager_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `full_name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(255) NULL
);
CREATE TABLE `commitments`(
    `commitment_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `maschet` VARCHAR(255) NOT NULL,
    `user_email` VARCHAR(255) NOT NULL,
    `passed_away_id` INT NOT NULL,
    `start_date` DATE NOT NULL,
    `deadline` DATE NULL
);
-- CREATE TABLE `users`(
--     `user_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     `name` VARCHAR(255) NOT NULL,
--     `email` VARCHAR(255) NOT NULL
-- );

-- ALTER TABLE
--     `passed_away` ADD CONSTRAINT `passed_away_manager_id_foreign` FOREIGN KEY(`manager_id`) REFERENCES `managers`(`manager_id`);
-- ALTER TABLE
--     `commitments` ADD CONSTRAINT `commitments_pass_away_id_foreign` FOREIGN KEY(`pass_away_id`) REFERENCES `passes_away`(`pass_away_id`);
-- ALTER TABLE
--     `storys` ADD CONSTRAINT `storys_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE
--     `commitments` ADD CONSTRAINT `commitments_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`user_id`);
-- ALTER TABLE
--     `storys` ADD CONSTRAINT `storys_pass_away_id_foreign` FOREIGN KEY(`pass_away_id`) REFERENCES `passes_away`(`pass_away_id`);