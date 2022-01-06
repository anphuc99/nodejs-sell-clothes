var express = require('express');
const api = require('../api.json')
const createError = require('http-errors');
var router = express.Router()
const fs = require("fs")
const Context = require("@longanphuc/orm-mysql").Context
const picture = require("../Model/picture")

// Upload img to server
router.post(api.admin.UploadImg, async function (req, res, next) {
    let context_picture = new Context(picture)
    let img = await context_picture.where("URL","/storage/"+ req.body.name).select()
    
    console.log(img)

    // check exists img
    if(img.length > 0){        
        res.json({rs: false, msg: "Tên hình ảnh đã tồn tại vui lòng đổi lại tên ảnh"})
        return
    }
    
    fs.writeFileSync("./public/storage/"+ req.body.name,req.body.base64,"base64")

    let pic = new picture()
    pic.URL = "/storage/"+ req.body.name
    pic.folder = "storage"
    await pic.save()
    res.json({rs: true, URL: pic.URL})
    return
})

// select all imgs from db
router.get(api.admin.SelectAllImg, async function(req,res,next){
    let pics = await new Context(picture).orderBy("created_at").select()
    let jpics = [] // response json pic
    pics.forEach((e,i)=>{
        jpics.push(e.toObject())
    })
    res.json(jpics)
    return
})

module.exports = router;
