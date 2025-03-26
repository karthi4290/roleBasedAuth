export const roleBasedAccess = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
     return res.status(401).json({ message: "Access denied" });
    }
    next();
  };
};
