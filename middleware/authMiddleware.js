import jwt from "jsonwebtoken";

export const tokenValid = async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "no token ,access denied" });
  }
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  }
  try {
    const decoded = jwt.verify(token, "jwtsecret");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token Invalid or Expired" });
  }
};
