const requireAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  return res.status(403).json({ message: 'Admin access required' });
};

export default requireAdmin;
// This middleware checks if the user is an admin.
// If not, it responds with a 403 Forbidden status and an error message.
// It should be used in routes that require admin privileges, like room management.
