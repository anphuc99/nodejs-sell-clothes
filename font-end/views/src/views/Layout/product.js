import React from "react";
import lib from "../js/lib";
class Product extends React.Component {
    render() {
        return (
            <div className={this.props.class + " item-grid simpleCart_shelfItem"}>
                <div className=" mid-pop">
                    <div className="pro-img">
                        <img src={lib.asset("images/pc4.jpg")} className="img-responsive" alt="" />
                        <div className="zoom-icon ">
                            <a className="picture" href="images/pc4.jpg" rel="title"><i className="glyphicon glyphicon-search icon "></i></a>
                            <a href="single.html"><i className="glyphicon glyphicon-menu-right icon"></i></a>
                        </div>
                    </div>
                    <div className="mid-1">
                        <div className="women">
                            <div className="women-top">
                                <span>Men</span>
                                <h6><a href="single.html">On the other</a></h6>
                            </div>
                            <div className="img item_add">
                                <a href="#"><img src={lib.asset("images/ca.png")} alt="" /></a>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="mid-2">
                            <p><label>$100.00</label><em className="item_price">$70.00</em></p>
                            <div className="block">
                                <div className="starbox small ghosting"><div className="positioner"><div className="stars"><div className="ghost" style={{ display: "none", width: "42.5px" }}></div><div className="colorbar" style={{ width: "42.5px" }}></div><div className="star_holder"><div className="star star-0"></div><div className="star star-1"></div><div className="star star-2"></div><div className="star star-3"></div><div className="star star-4"></div></div></div></div></div>
                            </div>

                            <div className="clearfix"></div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Product