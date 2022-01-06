const events = require("events")
let r = new events()
class e {
    constructor(){
    }

    r(){        
        r.emit("o","hello")
    }
}

let y = new e()

y.r()


r.on("o",function(e){
    console.log(e)
})
//console.log(e.prototype)