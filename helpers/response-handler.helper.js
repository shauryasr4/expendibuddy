const responseHandler = function(res, data, err, statusCode) {
  if (data) {
    if(!statusCode)
        statusCode = 200;
    return res.status(statusCode).json({
      success: true,
      count: data.length,
      data
    });
  } else {
    if(!statusCode)
        statusCode = 500;
    return res.status(statusCode).json({
      success: false,
      message: err.message
    });
  }
};

module.exports = responseHandler;
