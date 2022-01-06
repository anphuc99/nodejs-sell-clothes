const api = require("./api.json")
const md5 = require("md5")
const fs = require("fs")

const domain = "http://localhost:3001/api/"
const adminPath = __dirname+ "/front-end-admin/views/src/api.js"
const publicPath = __dirname+ "/font-end/views/src/api.js"
const severPath = __dirname + "/api.json"

let setAdminAPI = {}
let setPublicAPI = {}
let setSeverAPI = {
    admin: {},
    public: {}
}

let rd = function(len){
    let num = []
    function getNum(){
        let n = Math.random()
        if(num.indexOf(n) != -1){
            getNum()
        }else{
            num.push(n)
        }
    }

    for (let index = 0; index < len; index++) {
        getNum()        
    }
    return num
}
let rdAdmin = rd(Object.keys(api.admin).length)

Object.keys(api.admin).forEach((k,i)=>{
    setAdminAPI[k] =domain + "admin/" + md5(rdAdmin[i])
    setSeverAPI.admin[k] = "/admin/"+ md5(rdAdmin[i])
})

let rdPublic = rd(Object.keys(api.public).length)
Object.keys(api.public).forEach((k,i)=>{
    setPublicAPI[k] =domain + "public/" + md5(rdPublic[i])
    setSeverAPI.public[k] = "/public/"+ md5(rdPublic[i])
})

fs.writeFileSync(severPath,JSON.stringify(setSeverAPI))
fs.writeFileSync(adminPath,"export default " + JSON.stringify(setAdminAPI))
fs.writeFileSync(publicPath,"export default " + JSON.stringify(setPublicAPI))