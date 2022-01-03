import React from "react";
class Filler extends React.Component {
    render() {
        return (
            <div className="col-md-3 product-bottom">
                <div className=" rsidebar span_1_of_left">
                    <h4 className="cate">Categories</h4>
                    <ul className="menu-drop">
                        <li className="item1"><a href="#">Men </a>
                            <ul className="cute" style={{ display: "none" }}>
                                <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                <li className="subitem3"><a href="product.html">Automatic Fails </a></li>
                            </ul>
                        </li>
                        <li className="item2"><a href="#">Women </a>
                            <ul className="cute" style={{ display: "none" }}>
                                <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                <li className="subitem3"><a href="product.html">Automatic Fails </a></li>
                            </ul>
                        </li>
                        <li className="item3"><a href="#">Kids</a>
                            <ul className="cute" style={{ display: "none" }}>
                                <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                <li className="subitem3"><a href="product.html">Automatic Fails</a></li>
                            </ul>
                        </li>
                        <li className="item4"><a href="#">Accessories</a>
                            <ul className="cute" style={{ display: "none" }}>
                                <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                <li className="subitem3"><a href="product.html">Automatic Fails</a></li>
                            </ul>
                        </li>

                        <li className="item4"><a href="#">Shoes</a>
                            <ul className="cute" style={{ display: "none" }}>
                                <li className="subitem1"><a href="product.html">Cute Kittens </a></li>
                                <li className="subitem2"><a href="product.html">Strange Stuff </a></li>
                                <li className="subitem3"><a href="product.html">Automatic Fails </a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <section className="sky-form">
                    <h4 className="cate">Discounts</h4>
                    <div className="row row1 scroll-pane">
                        <div className="col col-4">
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Upto - 10% (20)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>40% - 50% (5)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>30% - 20% (7)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>10% - 5% (2)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Other(50)</label>
                        </div>
                    </div>
                </section>
                <section className="sky-form">
                    <h4 className="cate">Type</h4>
                    <div className="row row1 scroll-pane">
                        <div className="col col-4">
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Sofa Cum Beds (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Bags  (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Caps &amp; Hats (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Jackets &amp; Coats   (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Jeans  (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Shirts   (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Sunglasses  (30)</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Swimwear  (30)</label>
                        </div>
                    </div>
                </section>
                <section className="sky-form">
                    <h4 className="cate">Brand</h4>
                    <div className="row row1 scroll-pane">
                        <div className="col col-4">
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Roadstar</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Levis</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Persol</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Nike</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Edwin</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>New Balance</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Paul Smith</label>
                            <label className="checkbox"><input type="checkbox" name="checkbox" /><i></i>Ray-Ban</label>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Filler