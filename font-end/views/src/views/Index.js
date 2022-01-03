import React from "react";
import _LayoutIdex from "./Layout/_LayoutIndex";
import BannerIndex from "./Layout/_bannerIndex";
import Product from "./Layout/product";
import lib from "./js/lib";
class Index extends React.Component {
    render() {
        return (
            <_LayoutIdex banner={<BannerIndex />}>
                <div className="container">
                    <div className="content-top">
                        <div className="col-md-6 col-md">
                            <div className="col-1">
                                <a href="single.html" className="b-link-stroke b-animate-go  thickbox">
                                    <img src={lib.asset("images/pi.jpg")} className="img-responsive" alt="" /><div className="b-wrapper1 long-img"><p className="b-animate b-from-right    b-delay03 ">Lorem ipsum</p><label className="b-animate b-from-right    b-delay03 "></label><h3 className="b-animate b-from-left    b-delay03 ">Trendy</h3></div></a>
                            </div>
                            <div className="col-2">
                                <span>Hot Deal</span>
                                <h2><a href="single.html">Luxurious &amp; Trendy</a></h2>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years</p>
                                <a href="single.html" className="buy-now">Buy Now</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-md1">
                            <div className="col-3">
                                <a href="single.html"><img src={lib.asset("images/pi1.jpg")} className="img-responsive" alt="" />
                                    <div className="col-pic">
                                        <p>Lorem Ipsum</p>
                                        <label></label>
                                        <h5>For Men</h5>
                                    </div></a>
                            </div>
                            <div className="col-3">
                                <a href="single.html"><img src={lib.asset("images/pi2.jpg")} className="img-responsive" alt="" />
                                    <div className="col-pic">
                                        <p>Lorem Ipsum</p>
                                        <label></label>
                                        <h5>For Kids</h5>
                                    </div></a>
                            </div>
                            <div className="col-3">
                                <a href="single.html"><img src={lib.asset("images/pi3.jpg")} className="img-responsive" alt="" />
                                    <div className="col-pic">
                                        <p>Lorem Ipsum</p>
                                        <label></label>
                                        <h5>For Women</h5>
                                    </div></a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="content-mid">
                    <h3>Trending Items</h3>
                    <label className="line"></label>
                    <div className="mid-popular">
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <div className="clearfix"></div>
                    </div>
                    <div className="mid-popular">
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <Product class="col-md-3"/>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </_LayoutIdex>
        );
    }
}

export default Index