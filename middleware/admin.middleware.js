const { configDotenv } = require("dotenv");
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
  const token = req.headers.token;
  const decodedInforamtion = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
  if (decodedInforamtion) {
    req.adminId = decodedInforamtion.id;
    next();
  } else {
    res.json({
      message: "Unauthorized User !!",
    });
  }
}

module.exports = {
  adminMiddleware,
};
