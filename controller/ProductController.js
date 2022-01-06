var express = require('express');
var router = express.Router()
const api = require("../api.json")
const products = require("../Model/products")

/* POST: add product */
router.post(api.admin.AddProduct, function(req, res, next) {
  let product = new products()
  product.add(req.body)
  product.author = 1
  if(product.promotion == ""){
    product.promotion = undefined
  }
  console.log(req.body)
  product.save()
  res.json({rs: true})
});

module.exports = router;
