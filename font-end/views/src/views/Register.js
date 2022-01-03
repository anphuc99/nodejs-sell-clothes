import React from "react";
import _LayoutIdex from "./Layout/_LayoutIndex";
import Banner from "./Layout/_banner";
class Register extends React.Component {
    render() {
        return (
            <_LayoutIdex banner={<Banner name="Đăng ký"/>}>
                <div className="login">
                    <form>
                        <div className="col-md-6 login-do">
                            <div className="login-mail">
                                <input type="text" placeholder="Name" required=""/>
                                <i className ="glyphicon glyphicon-user"></i>
                            </div>
                            <div className="login-mail">
                                <input type="text" placeholder="Phone Number" required=""/>
                                <i className ="glyphicon glyphicon-phone"></i>
                            </div>
                            <div className="login-mail">
                                <input type="text" placeholder="Email" required=""/>
                                <i className ="glyphicon glyphicon-envelope"></i>
                            </div>
                            <div className="login-mail">
                                <input type="password" placeholder="Password" required=""/>
                                <i className ="glyphicon glyphicon-lock"></i>
                            </div>
                            <a className="news-letter " href="#">
                                <label className="checkbox1"><input type="checkbox" name="checkbox"/><i> </i>Forget Password</label>
                            </a>
                            <label className="hvr-skew-backward">
                                <input type="submit" defaultValue={"Submit"}/>
                            </label>

                        </div>
                        <div className="col-md-6 login-right">
                            <h3>Completely Free Account</h3>

                            <p>Pellentesque neque leo, dictum sit amet accumsan non, dignissim ac mauris. Mauris rhoncus, lectus tincidunt tempus aliquam, odio
                                libero tincidunt metus, sed euismod elit enim ut mi. Nulla porttitor et dolor sed condimentum. Praesent porttitor lorem dui, in pulvinar enim rhoncus vitae. Curabitur tincidunt, turpis ac lobortis hendrerit, ex elit vestibulum est, at faucibus erat ligula non neque.</p>
                            <a href="login.html" className="hvr-skew-backward">Login</a>

                        </div>

                        <div className="clearfix"> </div>
                    </form>
                </div>
            </_LayoutIdex>
            
        );
    }
}

export default Register