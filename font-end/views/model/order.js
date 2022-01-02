import Model from "./Model";
class order extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.user_id=undefined;
		this.delivery_date=undefined;
		this.delivery_address=undefined;
		this.node=undefined;
		this.status=undefined;
		this.created_at=undefined;

    }
}

export default order