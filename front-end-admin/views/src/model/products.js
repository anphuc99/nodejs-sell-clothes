import Model from "./Model";
class products extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.name=undefined;
		this.link=undefined;
		this.avatar=undefined;
		this.summary=undefined;
		this.content=undefined;
		this.author=undefined;
		this.price=undefined;
		this.promotion=undefined;
		this.category_id=undefined;
		this.created_at=undefined;
		this.deleted_at=undefined;

    }
}

export default products