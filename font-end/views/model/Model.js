class Model {
    constructor(json){
        Object.keys(json).forEach(e=>{
            this[e] = json[e]
        })
    }
}

export default Model