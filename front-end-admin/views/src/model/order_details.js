import Model from "./Model";
class order_details extends Model {
    constructor(json){
        super(json)
		this.order_id=undefined;
		this.product_id=undefined;
		this.quantily=undefined;
		this.price=undefined;
		this.promotion=undefined;
		this.created_at=undefined;

    }
}

export default order_details