import Model from "./Model";
class users extends Model {
    constructor(json){
        super(json)
		this.id=undefined;
		this.name=undefined;
		this.sex=undefined;
		this.date_birth=undefined;
		this.number=undefined;
		this.email=undefined;
		this.username=undefined;
		this.password=undefined;
		this.status=undefined;
		this.address=undefined;
		this.city_id=undefined;
		this.district=undefined;
		this.ward_id=undefined;
		this.node=undefined;
		this.role=undefined;
		this.created_at=undefined;
		this.deleted_at=undefined;
		this.facebook_id=undefined;

    }
}

export default users