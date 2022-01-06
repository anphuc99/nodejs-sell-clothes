var express = require('express');
var router = express.Router()
const api = require("../api.json")
const category = require("../Model/category")
const context = require("@longanphuc/orm-mysql").Context

/* GET: get all category */
router.get(api.admin.ListCategory,async function(req, res, next) {
  let cate_context = new context(category)
  let cates = await cate_context.select()
  let jcate = [] // json category
  cates.forEach(e => {
    jcate.push(e.toObject())
  });  
  res.json({cates: jcate})
});

module.exports = router;
