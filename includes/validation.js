const Joi = require("@hapi/joi");

module.exports = function user_login_validation(data) {
  const schema = {
    name: Joi.required().string().min(4).max(5),
    description: Joi.string().required(),
  };

  return Joi.validate(data, schema);
};
