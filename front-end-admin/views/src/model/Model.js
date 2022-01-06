class Model {
    constructor(json){
        if(json !== undefined){
            Object.keys(json).forEach(e=>{
                this[e] = json[e]
            }) 
        }
      
    }
}

export default Model