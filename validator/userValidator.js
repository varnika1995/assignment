const {celebrate,Joi}=require('celebrate');

const registerValidator=celebrate({
    body: Joi.object().keys({
        email: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        countryCode: Joi.number().required(),
        contact: Joi.string().required(),
        password: Joi.string().required()


    })
})


const loginValidator=celebrate({
    body:Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required()
    })
})

        
module.exports={registerValidator,loginValidator};
