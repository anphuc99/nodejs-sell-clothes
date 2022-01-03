import React from "react";
import _LayoutIdex from "./Layout/_LayoutIndex";
import Banner from "./Layout/_banner"
class Checkout extends React.Component {
    render() {
        return (
            <_LayoutIdex banner={<Banner name="Thanh toán" />}>
                <div className="bs-example4" data-example-id="simple-responsive-table">
                    <div className="table-responsive">
                        <table className="table-heading simpleCart_shelfItem">
                            <tbody>
                                <tr>
                                    <th className="table-grid">Item</th>
                                    <th>Prices</th>
                                    <th>Delivery </th>
                                    <th>Subtotal</th>
                                </tr>
                                <tr className="cart-header">
                                    <td className="ring-in"><a href="single.html" className="at-in"><img src="images/ch.jpg" className="img-responsive" alt="" /></a>
                                        <div className="sed">
                                            <h5><a href="single.html">Sed ut perspiciatis unde</a></h5>
                                            <p>(At vero eos et accusamus et iusto odio dignissimos ducimus ) </p>

                                        </div>
                                        <div className="clearfix"> </div>
                                        <div className="close1"> </div></td>
                                    <td>$100.00</td>
                                    <td>FREE SHIPPING</td>
                                    <td className="item_price">$100.00</td>
                                    <td className="add-check"><a className="item_add hvr-skew-backward" href="#">Add To Cart</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="produced">
                    <a href="single.html" className="hvr-skew-backward">Produced To Buy</a>
                </div>
            </_LayoutIdex>
        );
    }
}

export default Checkout