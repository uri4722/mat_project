import Joi from "joi";


export const loginSchema = Joi.object({
    email:
        Joi.string()
            .email({ tlds: { allow: false } })
            .message("כתובת מייל לא תקינה")
            .required()
            .messages({ 'string.empty': ' צריך למלאות אימייל' }),

    password:
        Joi.string()
            .min(6)
            .message("סיסמא חייבת להכיל לפחות 6 תווים")
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .message("סיסמא חייבת להכיל אותיות באנגלית ומספרים בלבד")
            .required()
            .messages({ 'string.empty': ' צריך למלאות סיסמא' }),
})