async function authGuard(req, res, next) {
  const password = req.body.password;
  if (!password || !password === "HNG9VBELT") {
    return res.status(403).json({
      status: "Unauthorized",
      message: " You are not authorized to use this endpoints",
    });
  } else {
    next();
  }
}

module.exports = { authGuard };
