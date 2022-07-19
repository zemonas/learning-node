const authorize = (req, res, next) => {
  const { user } = req.query;
  if (!user) {
    return res.status(401).send("You are not authorized to view this page");
    next();
  }
  req.user = { name: user, id: 1 };
  console.log("authorize");
  next();
};

module.exports = authorize;
