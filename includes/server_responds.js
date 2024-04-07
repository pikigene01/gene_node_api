const serverResponds = (statusCode, data, res) => {
  res.send(data).status(statusCode);
};

module.exports.serverResponds = serverResponds;
