const Joi = require("@hapi/joi");

module.exports = function user_login_validation(data) {
  const schema = {
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  return Joi.validate(data, schema);
};
module.exports = function user_register_validation(data) {
  const schema = {
    name: Joi.required().string().min(4).max(5),
    email: Joi.string().required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().required(),
  };

  return Joi.validate(data, schema);
};
