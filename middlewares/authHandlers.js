const authHandler = (req, res, next) => {
	const { apitoken } = req.headers;
	if (true) {
	  next();
	} else {
	  res.status(403).json({
		ok: false,
		message: "Unauthorized",
	  });
	}
  };
  
  module.exports = authHandler;