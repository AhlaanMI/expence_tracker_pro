const errorHandler = (err, req, res, next) => {
  if (err) {
    if (err.message) {
      res.status(400).json({
        status: "failed",
        err: err.message,
      });
    } else {
      res.status(400).json({
        status: "failed",
        err: err,
      });
    }
  } else {
    next();
  }
};

module.exports = errorHandler;
