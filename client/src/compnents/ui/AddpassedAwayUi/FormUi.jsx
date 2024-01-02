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
                <div className='nameAgeContiner'>
                    <input
                        className='nameInput'
                        type="text"
                        placeholder="שם מלא"
                        onChange={handleChange}
                        name="name"
                        value={newPassed.name}
                        required
                    />

                    <input
                        className='ageInput'
                        type="number"
                        placeholder="גיל"
                        onChange={handleChange}
                        name="age"
                        value={newPassed.age}
                        min="1"
                        max="200"
                        required
                    />
                </div>
                <SelectHeDates handleChange={handleChange} heDates={heDates} />


                <div className='checkboxContiner'>
                    <label htmlFor="lonely">גלמוד</label>
                    <input type="checkbox"
                        id="lonely"
                        onChange={handleChange}
                        name="lonely"
                        checked={newPassed.lonely}
                        
                    />
                    <label htmlFor="soldier">חייל</label>
                    <input type="checkbox"
                        id="soldier"
                        onChange={handleChange}
                        name="soldier"
                        checked={newPassed.soldier}
                    />
                    <label htmlFor="rabbi">רב</label>
                    <input type="checkbox"
                        id="rabbi"
                        onChange={handleChange}
                        name="rabbi"
                        checked={newPassed.rabbi}
                    />
                </div>
                <textarea
                    type="text"
                    placeholder="קצת על הנפטר"
                    onChange={handleChange}
                    name="about"
                    value={newPassed.about} />

                <button>הוספה</button>

            </form>
        </div>
    );
}
export default FormUi;