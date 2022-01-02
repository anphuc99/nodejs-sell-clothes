const Model = require("@longanphuc/orm-mysql").Model
class order extends Model {
    constructor(){
        super("order")
        this.$primaryKey = ["id"]
		this.id=undefined;
		this.user_id=undefined;
		this.delivery_date=undefined;
		this.delivery_address=undefined;
		this.node=undefined;
		this.status=undefined;
		this.created_at=undefined;

    }
}

module.exports = order