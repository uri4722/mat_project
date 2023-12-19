// CREATE TABLE `passed_away`(
//     `passed_away_id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     `manager_id` INT NOT NULL,
//     `name` VARCHAR(255) NOT NULL,
//     `year_death` INT NOT NULL,
//     `month_death` INT NOT NULL,
//     `day_death` INT NOT NULL,
//     `about` VARCHAR(255) NULL,
//     `img` VARCHAR(255)  NULL,
//     `lonely` TINYINT(1) NULL DEFAULT 0,
//     `soldier` TINYINT(1) NULL DEFAULT 0,
//     `rabbi` TINYINT(1) NULL DEFAULT 0,
//     `age` INT NULL
// );
import SelectHeDates from './SelectHeDates';
import './css/formUi.css';

import React, { useEffect, useState } from 'react';







function FormUi({ newPassed, handleChange, handleSubmit, message, heDates }) {





    return (
        <div className="formUi">
            <form onSubmit={handleSubmit} >
                <h1>הוספת נפטר</h1>
                {/* {message.type && <div className={message.type}>{message.body}</div>} */}
                <input type="text" placeholder="שם מלא" onChange={handleChange} name="name"
                    value={newPassed.name}
                />
                <SelectHeDates handleChange={handleChange} heDates={heDates} />

                <button>הוספה</button>

            </form>
        </div>
    );
}
export default FormUi;