import Joi from 'joi';

export const managerUpdateSchema = Joi.object({
    name:
        Joi.string().min(2)
            .message("שם חייב להכיל לפחות 2 תווים")
            .required().messages({ 'string.empty': ' צריך למלאות שם' }),

    email:
        Joi.string()
            .email({ tlds: { allow: false } })
            .message("כתובת מייל לא תקינה")
            .required()
            .messages({ 'string.empty': ' צריך למלאות אימייל' }),

    phone:
        Joi.string()
            .pattern(new RegExp('^(\\+972|0)[1-9]\\d{7,8}$'))
            .message("מספר טלפון חייב להיות בפורמט המתאים")
            .allow(null)
            .allow(''),
    manager_id:
        Joi.number(),
    newPassword:
        Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .allow(null)
            .allow(''),
    oldPassword:
        Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .allow(null)
            .allow(''),
    role:
        Joi.string()
            .valid('manager', 'user')
            .required(),
});
