const errorMiddleware = (err, req, res, nex) => {
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    err,
  });
};

export default errorMiddleware;
