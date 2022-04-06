const express = require("express");
const globalControllers = require("./globalControllers");

const router = express.Router();

router.get("/", globalControllers.indexController);
router.get("/intro", globalControllers.introController);
router.get("/product", globalControllers.productController);


module.exports = router;