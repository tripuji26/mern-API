exports.createProduct = (req, res, next) => {
  res.json({
    message: "Creare product success",
    data: {
      id: 1,
      name: "Sari roti",
      price: 5000,
    },
  });
  next();
};

exports.getAllProduct = (req, res, next) => {
  res.json({
    massage: "Get all products success",
    data: {
      id: 1,
      name: "sari roti",
      price: 5000,
    },
  });
  next();
};
