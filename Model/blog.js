const Model = require("@longanphuc/orm-mysql").Model
class blog extends Model {
    constructor(){
        super("blog")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.name=undefined;
		this.author=undefined;
		this.avatar=undefined;
		this.summary=undefined;
		this.content=undefined;
		this.created_at=undefined;

    }
}

module.exports = blog