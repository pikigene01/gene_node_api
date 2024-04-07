const serverResponds = (statusCode, data, res) => {
  return res.status(statusCode).send(data);
};

module.exports.serverResponds = serverResponds;
