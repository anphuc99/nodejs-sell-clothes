import React from "react";
import _LayoutIdex from "./Layout/_LayoutIndex";
import Banner from "./Layout/_banner";
import Filler from "./Layout/Filler";
class Single extends React.Component {
    render() {

        return (
            <_LayoutIdex banner={<Banner name="Sản phẩm" />}>
                <div className="col-md-9">
                    <div className="col-md-5 grid">
                        <div className="flexslider">
                            <div className="flex-viewport" style={{ overflow: "hidden", position: "relative" }}><ul className="slides" style={{ width: "1000%", "transition-duration": "0.6s", transform: "translate3d(-606px, 0px, 0px)" }}><li data-thumb="images/si2.jpg" className="clone" aria-hidden="true" style={{ "width": "303px", float: "left", display: "block" }}>
                                <div className="thumb-image"> <img src="images/si2.jpg" data-imagezoom="true" className="img-responsive" draggable="false" /> </div>
                            </li>
                                <li data-thumb="images/si.jpg" style={{ width: "303px", float: "left", display: "block", }} className="">
                                    <div className="thumb-image"> <img src="images/si.jpg" data-imagezoom="true" className="img-responsive" draggable="false" /> </div>
                                </li>
                                <li data-thumb="images/si1.jpg" className="flex-active-slide" style={{ width: "303px", float: "left", display: "block" }}>
                                    <div className="thumb-image"> <img src="images/si1.jpg" data-imagezoom="true" className="img-responsive" draggable="false" /> </div>
                                </li>
                                <li data-thumb="images/si2.jpg" className="" style={{ width: "303px", float: "left", display: "block" }}>
                                    <div className="thumb-image"> <img src="images/si2.jpg" data-imagezoom="true" className="img-responsive" draggable="false" /> </div>
                                </li>
                                <li data-thumb="images/si.jpg" style={{ width: "303px", float: "left", display: "block" }} className="clone" aria-hidden="true">
                                    <div className="thumb-image"> <img src="images/si.jpg" data-imagezoom="true" className="img-responsive" draggable="false" /> </div>
                                </li></ul></div><ol className="flex-control-nav flex-control-thumbs"><li><img src="images/si.jpg" className="" draggable="false" /></li><li><img src="images/si1.jpg" draggable="false" className="flex-active" /></li><li><img src="images/si2.jpg" draggable="false" className="" /></li></ol><ul className="flex-direction-nav"><li className="flex-nav-prev"><a className="flex-prev" href="#">Previous</a></li><li className="flex-nav-next"><a className="flex-next" href="#">Next</a></li></ul>
                        </div>
                    </div>
                    <div className="col-md-7 single-top-in">
                        <div className="span_2_of_a1 simpleCart_shelfItem">
                            <h3>Nam liber tempor cum</h3>
                            <p className="in-para"> There are many variations of passages of Lorem Ipsum.</p>
                            <div className="price_single">
                                <span className="reducedfrom item_price">$140.00</span>
                                <a href="#">click for offer</a>
                                <div className="clearfix"></div>
                            </div>
                            <h4 className="quick">Quick Overview:</h4>
                            <p className="quick_desc"> Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; es</p>
                            <div className="wish-list">
                                <ul>
                                    <li className="wish"><a href="#"><span className="glyphicon glyphicon-check" aria-hidden="true"></span>Add to Wishlist</a></li>
                                    <li className="compare"><a href="#"><span className="glyphicon glyphicon-resize-horizontal" aria-hidden="true"></span>Add to Compare</a></li>
                                </ul>
                            </div>
                            <div className="quantity">
                                <div className="quantity-select">
                                    <div className="entry value-minus">&nbsp;</div>
                                    <div className="entry value"><span>1</span></div>
                                    <div className="entry value-plus active">&nbsp;</div>
                                </div>
                            </div>
                            <a href="#" className="add-to item_add hvr-skew-backward">Add to cart</a>
                            <div className="clearfix"> </div>
                        </div>

                    </div>
                    <div className="clearfix"> </div>
                    <div className="tab-head">
                        <nav className="nav-sidebar">
                            <ul className="nav tabs">
                                <li className="active"><a href="#tab1" data-toggle="tab">Product Description</a></li>
                                <li className=""><a href="#tab2" data-toggle="tab">Additional Information</a></li>
                                <li className=""><a href="#tab3" data-toggle="tab">Reviews</a></li>
                            </ul>
                        </nav>
                        <div className="tab-content one">
                            <div className="tab-pane active text-style" id="tab1">
                                <div className="facts">
                                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
                                    <ul>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                    </ul>
                                </div>

                            </div>
                            <div className="tab-pane text-style" id="tab2">

                                <div className="facts">
                                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                    <ul>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Multimedia Systems</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Digital media adapters</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Set top boxes for HDTV and IPTV Player  </li>
                                    </ul>
                                </div>

                            </div>
                            <div className="tab-pane text-style" id="tab3">

                                <div className="facts">
                                    <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
                                    <ul>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                        <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <Filler />
            </_LayoutIdex>
        );
    }
    componentDidMount() {
        //let id = this.props.match.params.id;
    }
}

export default Single