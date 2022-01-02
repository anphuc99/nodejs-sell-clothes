const Model = require("@longanphuc/orm-mysql").Model
class act_users extends Model {
    constructor(){
        super("act_users")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.product_id=undefined;
		this.user_id=undefined;
		this.type_act=undefined;
		this.feedback=undefined;
		this.node=undefined;
		this.created_at=undefined;

    }
}

module.exports = act_users