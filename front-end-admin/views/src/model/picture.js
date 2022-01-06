import Model from "./Model";
class picture extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.URL=undefined;
		this.folder=undefined;
		this.created_at=undefined;

    }
}

export default picture