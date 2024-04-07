const { auth } = require("../includes/middlewares/verifyToken");

const router = require("express").Router();

router.post("/posts", auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
