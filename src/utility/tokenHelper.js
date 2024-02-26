const jwt = require("jsonwebtoken");
const secretKey = "sdhui33";
const encodeToken = (email, user_id) => {
  const expiresIn = "24h";
  const PAYLOAD = {
    email,
    user_id,
  };
  return jwt.sign(PAYLOAD, secretKey, { expiresIn });
};

const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { encodeToken, decodeToken };
