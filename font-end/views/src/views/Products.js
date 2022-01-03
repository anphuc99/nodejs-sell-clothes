import React from "react";
import _LayoutIdex from "./Layout/_LayoutIndex";
import Banner from "./Layout/_banner";
import Product from "./Layout/product";
import Filler from "./Layout/Filler";
class Products extends React.Component {
    render() {
        return (
            <_LayoutIdex banner={<Banner name={"Sản phẩm"} />}>
                <div className="col-md-9">
                    <div className="mid-popular">
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                        <Product class="col-md-4" />
                    </div>
                </div>
                <Filler />
            </_LayoutIdex>
        );
    }
}

export default Products