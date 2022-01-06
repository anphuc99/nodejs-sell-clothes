const Model = require("@longanphuc/orm-mysql").Model
class category extends Model {
    constructor(){
        super("category")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.name=undefined;
		this.link=undefined;
		this.node=undefined;
		this.created_at=undefined;
		this.parent=undefined;

    }
}

module.exports = category