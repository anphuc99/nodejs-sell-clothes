import Model from "./Model";
class blog extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.name=undefined;
		this.author=undefined;
		this.avatar=undefined;
		this.summary=undefined;
		this.content=undefined;
		this.created_at=undefined;

    }
}

export default blog