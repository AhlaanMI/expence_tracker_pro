const userDashbord = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User dashboard",
  });
};

module.exports = userDashbord;
