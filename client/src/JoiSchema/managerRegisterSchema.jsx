import Joi from 'joi';

export const managerRegisterSchema = Joi.object({
    name:
        Joi.string().min(2)
            .message("שם חייב להכיל לפחות 2 תווים")
            .required().messages({ 'string.empty': ' צריך למלאות שם' }),
    password:
        Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .required()
            .messages({ 'string.empty': ' צריך למלאות סיסמא' }),
    verifyPassword:
        Joi.valid(Joi.ref('password'))
            .messages({ 'any.only': 'הסיסמאות חייבות להיות זהות' }),
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
});