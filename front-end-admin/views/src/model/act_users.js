import Model from "./Model";
class act_users extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.product_id=undefined;
		this.user_id=undefined;
		this.type_act=undefined;
		this.feedback=undefined;
		this.node=undefined;
		this.created_at=undefined;
    }
}

export default act_users