const jwt = require("jsonwebtoken");
const { serverResponds } = require("../../includes/server_responds");

const auth = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return serverResponds(
      404,
      { status: 404, message: "User Not Authenticated" },
      res
    );
  }
  try {
    const isVerified = await jwt.verify(token, process.env.TOKEN);
    req.user = isVerified;
    next();
  } catch (error) {
    return serverResponds(404, { message: error }, res);
  }
};

module.exports.auth = auth;
