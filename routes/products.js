const { auth } = require("../includes/middlewares/verifyToken");

const router = require("express").Router();

router.post("/products", auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
