const Model = require("@longanphuc/orm-mysql").Model
class picture extends Model {
    constructor(){
        super("picture")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.URL=undefined;
		this.folder=undefined;
		this.created_at=undefined;

    }
}

module.exports = picture