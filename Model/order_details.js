const Model = require("@longanphuc/orm-mysql").Model
class order_details extends Model {
    constructor(){
        super("order_details")
        this.$primaryKey = ["order_id","product_id"]
		this.order_id=undefined;
		this.product_id=undefined;
		this.quantily=undefined;
		this.price=undefined;
		this.promotion=undefined;
		this.created_at=undefined;

    }
}

module.exports = order_details