import React from "react";
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"
import "../css/style4.css"
import "../css/jstarbox.css"
import "../css/popuo-box.css"
import "../css/form.css"
import "../css/flexslider.css"
import "../css/chocolat.css"
class _LayoutIdex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: { display: "none" }
        }
    }
    OpenMenu() {

    }
    render() {
        return (
            <div>
                <div className="header">
                    <div className="container">
                        <div className="head">
                            <div className=" logo">
                                <Link to="/"><img src="images/logo.png" alt="" /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="header-top">
                        <div className="container">
                            <div className="col-sm-5 col-md-offset-2  header-login">
                                <ul>
                                    <li><Link to="/login/login">Login</Link></li>
                                    <li><Link to="/login/register">Register</Link></li>
                                    <li><Link to="/cart/checkout">Checkout</Link></li>
                                </ul>
                            </div>

                            <div className="col-sm-5 header-social">
                                <ul>
                                    <li><a href="##"><i></i></a></li>
                                    <li><a href="##"><i className="ic1"></i></a></li>
                                    <li><a href="##"><i className="ic2"></i></a></li>
                                    <li><a href="##"><i className="ic3"></i></a></li>
                                    <li><a href="##"><i className="ic4"></i></a></li>
                                </ul>

                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="container">

                        <div className="head-top">

                            <div className="col-sm-8 col-md-offset-2 h_menu4">
                                <nav className="navbar nav_bottom" role="navigation">
                                    <div className="navbar-header nav_2">
                                        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>

                                    </div>
                                    <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                                        <ul className="nav navbar-nav nav_1">
                                            <li><Link className="color" to="/">Home</Link></li>

                                            <li className="dropdown mega-dropdown active">
                                                <a className="color1" href="#" data-toggle="dropdown">Women<span className="caret"></span></a>
                                                <div className="dropdown-menu ">
                                                    <div className="menu-top">
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu1</h4>
                                                                <ul>
                                                                    <li><Link to="/the-loai/1">Accessories</Link></li>
                                                                    <li><a href="#/the-loai/1">Bags</a></li>
                                                                    <li><a href="#/the-loai/1">Caps &amp; Hats</a></li>
                                                                    <li><a href="#/the-loai/1">Hoodies &amp; Sweatshirts</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu2</h4>
                                                                <ul>
                                                                    <li><a href="product.html">Jackets &amp; Coats</a></li>
                                                                    <li><a href="product.html">Jeans</a></li>
                                                                    <li><a href="product.html">Jewellery</a></li>
                                                                    <li><a href="product.html">Jumpers &amp; Cardigans</a></li>
                                                                    <li><a href="product.html">Leather Jackets</a></li>
                                                                    <li><a href="product.html">Long Sleeve T-Shirts</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu3</h4>
                                                                <ul>
                                                                    <li><a href="product.html">Shirts</a></li>
                                                                    <li><a href="product.html">Shoes, Boots &amp; Trainers</a></li>
                                                                    <li><a href="product.html">Sunglasses</a></li>
                                                                    <li><a href="product.html">Sweatpants</a></li>
                                                                    <li><a href="product.html">Swimwear</a></li>
                                                                    <li><a href="product.html">Trousers &amp; Chinos</a></li>

                                                                </ul>

                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu4</h4>
                                                                <ul>
                                                                    <li><a href="product.html">T-Shirts</a></li>
                                                                    <li><a href="product.html">Underwear &amp; Socks</a></li>
                                                                    <li><a href="product.html">Vests</a></li>
                                                                    <li><a href="product.html">Jackets &amp; Coats</a></li>
                                                                    <li><a href="product.html">Jeans</a></li>
                                                                    <li><a href="product.html">Jewellery</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1 col5">
                                                            <img src="images/me.png" className="img-responsive" alt="" />
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="dropdown mega-dropdown active">
                                                <a className="color2" href="#" data-toggle="dropdown">Men<span className="caret"></span></a>
                                                <div className="dropdown-menu mega-dropdown-menu">
                                                    <div className="menu-top">
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu1</h4>
                                                                <ul>
                                                                    <li><a href="product.html">Accessories</a></li>
                                                                    <li><a href="product.html">Bags</a></li>
                                                                    <li><a href="product.html">Caps &amp; Hats</a></li>
                                                                    <li><a href="product.html">Hoodies &amp; Sweatshirts</a></li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu2</h4>
                                                                <ul>
                                                                    <li><a href="product.html">Jackets &amp; Coats</a></li>
                                                                    <li><a href="product.html">Jeans</a></li>
                                                                    <li><a href="product.html">Jewellery</a></li>
                                                                    <li><a href="product.html">Jumpers &amp; Cardigans</a></li>
                                                                    <li><a href="product.html">Leather Jackets</a></li>
                                                                    <li><a href="product.html">Long Sleeve T-Shirts</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu3</h4>

                                                                <ul>
                                                                    <li><a href="product.html">Shirts</a></li>
                                                                    <li><a href="product.html">Shoes, Boots &amp; Trainers</a></li>
                                                                    <li><a href="product.html">Sunglasses</a></li>
                                                                    <li><a href="product.html">Sweatpants</a></li>
                                                                    <li><a href="product.html">Swimwear</a></li>
                                                                    <li><a href="product.html">Trousers &amp; Chinos</a></li>

                                                                </ul>

                                                            </div>
                                                        </div>
                                                        <div className="col1">
                                                            <div className="h_nav">
                                                                <h4>Submenu4</h4>
                                                                <ul>
                                                                    <li><a href="product.html">T-Shirts</a></li>
                                                                    <li><a href="product.html">Underwear &amp; Socks</a></li>
                                                                    <li><a href="product.html">Vests</a></li>
                                                                    <li><a href="product.html">Jackets &amp; Coats</a></li>
                                                                    <li><a href="product.html">Jeans</a></li>
                                                                    <li><a href="product.html">Jewellery</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="col1 col5">
                                                            <img src="images/me1.png" className="img-responsive" alt="" />
                                                        </div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a className="color3" href="product.html">Sale</a></li>
                                            <li><a className="color4" href="404.html">About</a></li>
                                            <li><a className="color5" href="typo.html">Short Codes</a></li>
                                            <li><a className="color6" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            <div className="col-sm-2 search-right">
                                <ul className="heart">
                                    <li>
                                        <a href="wishlist.html">
                                            <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                                        </a></li>
                                    <li><a className="play-icon popup-with-zoom-anim" href="#small-dialog"><i className="glyphicon glyphicon-search"> </i></a></li>
                                </ul>
                                <div className="cart box_1">
                                    <Link to="/cart/checkout">
                                        <h3> <div className="total">
                                            <span className="simpleCart_total">$0.00</span></div>
                                            <img src="images/cart.png" alt="" /></h3>
                                    </Link>
                                    <p><a href="#!;" className="simpleCart_empty">Empty Cart</a></p>

                                </div>
                                <div className="clearfix"> </div>
                                <div id="small-dialog" className="mfp-hide">
                                    <div className="search-top">
                                        <div className="login-search">
                                            <input type="submit" defaultValue={""} />
                                            <input type="text" defaultValue={"Search.."} />
                                        </div>
                                        <p>Shopin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    {this.props.banner}


                    <div className="contact">
                        {this.props.children}
                        <div className="container">
                            <div className="brand">
                                <div className="col-md-3 brand-grid">
                                    <img src="images/ic.png" className="img-responsive" alt="" />
                                </div>
                                <div className="col-md-3 brand-grid">
                                    <img src="images/ic1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="col-md-3 brand-grid">
                                    <img src="images/ic2.png" className="img-responsive" alt="" />
                                </div>
                                <div className="col-md-3 brand-grid">
                                    <img src="images/ic3.png" className="img-responsive" alt="" />
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="footer-middle">
                        <div className="container">
                            <div className="col-md-3 footer-middle-in">
                                <Link to="/"><img src="images/log.png" alt="" /></Link>
                                <p>Suspendisse sed accumsan risus. Curabitur rhoncus, elit vel tincidunt elementum, nunc urna
                                    tristique nisi, in interdum libero magna tristique ante. adipiscing varius. Vestibulum dolor
                                    lorem.</p>
                            </div>

                            <div className="col-md-3 footer-middle-in">
                                <h6>Information</h6>
                                <ul className=" in">
                                    <li><a href="404.html">About</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="contact.html">Site Map</a></li>
                                </ul>
                                <ul className="in in1">
                                    <li><a href="#">Order History</a></li>
                                    <li><a href="wishlist.html">Wish List</a></li>
                                    <li><a href="login.html">Login</a></li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <div className="col-md-3 footer-middle-in">
                                <h6>Tags</h6>
                                <ul className="tag-in">
                                    <li><a href="#">Lorem</a></li>
                                    <li><a href="#">Sed</a></li>
                                    <li><a href="#">Ipsum</a></li>
                                    <li><a href="#">Contrary</a></li>
                                    <li><a href="#">Chunk</a></li>
                                    <li><a href="#">Amet</a></li>
                                    <li><a href="#">Omnis</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-middle-in">
                                <h6>Newsletter</h6>
                                <span>Sign up for News Letter</span>
                                <form>
                                    <input type="text" defaultValue={"Enter your E-mail"} />
                                    <input type="submit" defaultValue={"Subscribe"} />
                                </form>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <ul className="footer-bottom-top">
                                <li><a href="#"><img src="images/f1.png" className="img-responsive" alt="" /></a></li>
                                <li><a href="#"><img src="images/f2.png" className="img-responsive" alt="" /></a></li>
                                <li><a href="#"><img src="images/f3.png" className="img-responsive" alt="" /></a></li>
                            </ul>
                            <p className="footer-class">&copy; 2016 Shopin. All Rights Reserved | Design by <a
                                href="http://w3layouts.com/" target="_blank">W3layouts</a> </p>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default _LayoutIdex