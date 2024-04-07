const Joi = require("@hapi/joi");

const user_login_validation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(data);
};
const user_register_validation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().min(4).max(5),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().required(),
  });

  return schema.validate(data);
};

module.exports.user_login_validation = user_login_validation;
module.exports.user_register_validation = user_register_validation;
