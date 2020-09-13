const express = require("express");

const router = express.Router();

const productsController = require("../controllers/products");

// Creat
router.post("/product", productsController.createProduct);

// Read /Get
router.get("/products", productsController.getAllProduct);

// router.put("/products", (req, res, next) => {
//   res.json({ name: "Tri Puji Septiawan", email: "tripujiseptiawan@gmail.com" });
//   next();
// });

// router.delete("/products", (req, res, next) => {
//   res.json({ name: "Tri Puji Septiawan", email: "tripujiseptiawan@gmail.com" });
//   next();
// });

module.exports = router;
