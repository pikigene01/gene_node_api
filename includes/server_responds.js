module.exports = function serverResponds(statusCode, data, res) {
  res.send(data).status(statusCode);
};
